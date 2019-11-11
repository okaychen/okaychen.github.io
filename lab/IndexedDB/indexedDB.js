(function () {
  // 元素们
  var eleForm = document.querySelector('#form');
  var eleTbody = document.querySelector('#result tbody');
  var eleStatus = document.getElementById('status');
  // 模板字符内容
  var strTplList = document.getElementById('tplList').innerHTML;

  var logError = function (error) {
      eleStatus.style.display = 'block';
      eleStatus.innerHTML = '<span class="error">' + error + '</span>';
    },
    logInfo = function (info) {
      eleStatus.style.display = 'block';
      eleStatus.innerHTML = '<span class="info">' + info + '</span>';
    };

  // 简易模板方法
  String.prototype.temp = function (obj) {
    return this.replace(/\$\w+\$/gi, function (matchs) {
      return obj[matchs.replace(/\$/g, "")] || '';
    });
  };

  // 本演示使用的数据库名称
  var dbName = 'project';
  // 版本
  var version = 1;
  // 数据库数据结果
  var db;

  // 打开数据库
  var DBOpenRequest = window.indexedDB.open(dbName, version);

  // 如果数据库打开失败
  DBOpenRequest.onerror = function (event) {
    logError('数据库打开失败');
  };

  DBOpenRequest.onsuccess = function (event) {
    // 存储数据结果
    db = DBOpenRequest.result;

    // 显示数据
    method.show();
  };

  // 下面事情执行于：数据库首次创建版本，或者window.indexedDB.open传递的新版本（版本数值要比现在的高）
  DBOpenRequest.onupgradeneeded = function (event) {
    var db = event.target.result;

    db.onerror = function (event) {
      logError('数据库打开失败');
    };

    // 创建一个数据库存储对象
    var objectStore = db.createObjectStore(dbName, {
      keyPath: 'id',
      autoIncrement: true
    });

    // 定义存储对象的数据项
    objectStore.createIndex('id', 'id', {
      unique: true
    });
    objectStore.createIndex('name', 'name');
    objectStore.createIndex('begin', 'begin');
    objectStore.createIndex('end', 'end');
    objectStore.createIndex('person', 'person');
    objectStore.createIndex('remark', 'remark');
  };

  var method = {
    add: function (newItem) {
      var transaction = db.transaction([dbName], "readwrite");
      // 打开已经存储的数据对象
      var objectStore = transaction.objectStore(dbName);
      // 添加到数据对象中
      var objectStoreRequest = objectStore.add(newItem);
      objectStoreRequest.onsuccess = function (event) {
        method.show();
      };
    },
    edit: function (id, data) {
      // 编辑数据
      var transaction = db.transaction([dbName], "readwrite");
      // 打开已经存储的数据对象
      var objectStore = transaction.objectStore(dbName);
      // 获取存储的对应键的存储对象
      var objectStoreRequest = objectStore.get(id);
      // 获取成功后替换当前数据
      objectStoreRequest.onsuccess = function (event) {
        // 当前数据
        var myRecord = objectStoreRequest.result;
        // 遍历替换
        for (var key in data) {
          if (typeof myRecord[key] != 'undefined') {
            myRecord[key] = data[key];
          }
        }
        // 更新数据库存储数据
        objectStore.put(myRecord);
      };
    },
    del: function (id) {
      // 打开已经存储的数据对象
      var objectStore = db.transaction([dbName], "readwrite").objectStore(dbName);
      // 直接删除            
      var objectStoreRequest = objectStore.delete(id);
      // 删除成功后
      objectStoreRequest.onsuccess = function () {
        method.show();
      };
    },
    show: function () {
      // 最终要展示的HTML数据
      var htmlProjectList = '';
      // 打开对象存储，获得游标列表
      var objectStore = db.transaction(dbName).objectStore(dbName);
      objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result;
        // 如果游标没有遍历完，继续下面的逻辑
        if (cursor) {
          htmlProjectList = htmlProjectList + strTplList.temp(cursor.value);
          // 继续下一个游标项
          cursor.continue();
          // 如果全部遍历完毕
        } else {
          logInfo('');
          eleTbody.innerHTML = htmlProjectList;

          if (htmlProjectList == '') {
            logInfo('暂无数据');
          }
        }
      }
    }
  };

  // 表单提交新增数据
  eleForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = {};

    [].slice.call(this.querySelectorAll('input,textarea')).forEach(function (ele) {
      if (ele.name) {
        formData[ele.name] = ele.value;
      }
    });

    // 添加新的数据
    method.add(formData);

    this.reset();
  });

  // 编辑事件
  eleTbody.addEventListener('focusout', function (event) {
    var eleTd = event.target;
    // 获取id，也就是获得主键
    var id = eleTd && eleTd.getAttribute('data-id');
    if (!id || !/td/.test(eleTd.tagName)) {
      return;
    }

    // 这是要替换的数据
    var data = {
      id: id * 1
    };
    // 获得现在的数据
    [].slice.call(eleTd.parentElement.querySelectorAll('td[data-key]')).forEach(function (td) {
      var key = td.getAttribute('data-key');
      var value = td.innerText || td.textContent || '';

      data[key] = value;
    });

    // 更新本地数据库
    method.edit(id, data);
  });
  // 删除事件
  eleTbody.addEventListener('click', function (event) {
    var eleBtn = event.target,
      id = '';
    if (eleBtn && eleBtn.classList.contains('jsListDel') && (id = eleBtn.getAttribute('data-id'))) {
      method.del(id * 1);
      event.preventDefault();
    }
  });
})();