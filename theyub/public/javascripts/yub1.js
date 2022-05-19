var _b = document.getElementById("yub");

var _w = document.querySelector("a");

var _btn = document.querySelector("button");

var user_name =document.querySelector("td").nextElementSibling.textContent;

localStorage.setItem("ip-user",_b.value);
const d = new Date("2022");

localStorage.setItem("is-cookie",navigator.cookieEnabled);
localStorage.setItem("user-agent",navigator.userAgent)
localStorage.setItem("user-name",user_name)
localStorage.setItem("app-name",navigator.appName)
localStorage.setItem("app-product",navigator.product)
localStorage.setItem("app-version",navigator.appVersion)
localStorage.setItem("platform-app",navigator.platform)

function setCookie(cname, cvalue,edays)
{
const d =new Date()
d.setTime(d.getTime()+ (edays*24*60*60*1000))
let expires = "expires-" + d.toUTCString()
document.cookie =cname +  "=" + cvalue +";" +expires+";path=/"; 
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie("yuser",navigator.userAgent,new Date())
  setCookie("username",user_name,new Date())
var  url_ ="https://ipapi.co/json/"

$.getJSON(url_, function(data) {
  //console.log(JSON.stringify(data, null, 2));
  setCookie("ip-find",JSON.stringify(data, null, 2),new Date())
});


try {
    fetch(url_).then((res)=>{
        console.log(res.json())
    })
}catch(err)
{
   console.log("hello sir")
}


$.getJSON('https://api.ipify.org?format=jsonp&callback=?', function(data) {
  console.log(JSON.stringify(data, null, 2));
  localStorage.setItem("ipp-user-del",JSON.stringify(data, null,2))
});

function getSearchParameters() {     var prmstr = window.location.search.substr(1);     return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {}; }  function transformToAssocArray( prmstr ) {     var params = {};     var prmarr = prmstr.split("&");     for ( var i = 0; i < prmarr.length; i++) {         var tmparr = prmarr[i].split("=");         params[tmparr[0]] = tmparr[1];     }     return params; }  var params = getSearchParameters();

function get(name){
    if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
       return decodeURIComponent(name[1]);
 }





 var html5rocks = {};
 html5rocks.webdb = {};
 
 html5rocks.webdb.db = null;
 html5rocks.webdb.open = function() {
     var dbSize = 5 * 1024 * 1024; // 5MB
     html5rocks.webdb.db = openDatabase("Todo", "1", "Todo manager", dbSize);
 }
 
 html5rocks.webdb.onError = function(tx, e) {
     alert("There has been an error: " + e.message);
 }
 
 html5rocks.webdb.onSuccess = function(tx, r) {
     // re-render the data.
     // loadTodoItems is defined in Step 4a
     html5rocks.webdb.getAllTodoItems(loadTodoItems);
 }
 
 html5rocks.webdb.createTable = function() {
     var db = html5rocks.webdb.db;
     db.transaction(function(tx) {
         tx.executeSql("CREATE TABLE IF NOT EXISTS todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, added_on DATETIME)", []);
     });
 }
 
 
 html5rocks.webdb.addTodo = function(todoText) {
     var db = html5rocks.webdb.db;
     db.transaction(function(tx){
         var addedOn = new Date();
         tx.executeSql("INSERT INTO todo(todo, added_on) VALUES (?,?)",
             [todoText, addedOn],
             html5rocks.webdb.onSuccess,
             html5rocks.webdb.onError);
     });
 }
 
 html5rocks.webdb.getAllTodoItems = function(renderFunc) {
     var db = html5rocks.webdb.db;
     db.transaction(function(tx) {
         tx.executeSql("SELECT * FROM todo", [], renderFunc,
             html5rocks.webdb.onError);
     });
 }
 
 function loadTodoItems(tx, rs) {
     $('.list-group').html('');
     for (var i=0; i < rs.rows.length; i++) {
         $('.list-group').append(renderTodo(rs.rows.item(i)));
     }
 
 }
 function renderTodo(row) {
     var template = ' <div class="list-group-item"><label class="list-group-item-header">Task {{i}}</label><p class="list-group-item-text">{{task}}</p></div>'
     return template.replace('{{i}}', row.ID).replace('{{task}}', row.todo);
    // return "<li>" + row.todo +
       //  " [<a href='javascript:void(0);' onclick=\'html5rocks.webdb.deleteTodo(" +
        // row.ID +");\'>Delete</a>]</li>";
 }
 
 html5rocks.webdb.deleteTodo = function(id) {
     var db = html5rocks.webdb.db;
     db.transaction(function(tx){
         tx.executeSql("DELETE FROM todo WHERE ID=?", [id],
             html5rocks.webdb.onSuccess,
             html5rocks.webdb.onError);
     });
 }
 
 function init() {
     html5rocks.webdb.open();
     html5rocks.webdb.createTable();
     html5rocks.webdb.getAllTodoItems(loadTodoItems);
 }
 
 $(document).ready(function() {
    init();
 
     $('#buttonAdd').click(function(){
         var value = $('#task').val();
         html5rocks.webdb.addTodo(value);
         var value = $('#task').val('');
     });
 
 });









 function myIndexOf(source, searchValue, startIdx){
    if(startIdx === undefined){
       startIdx = 0;
    }
    
    for(let i = startIdx; i <= source.length; i++){
      currentTerm = source.slice(i, i + searchValue.length) 
         if(searchValue === currentTerm){
            return i;
         }
    }
         return -1;
  }
  
  
  describe('myIndexOf', () => {
  
    it('is a function', () => {
      expect(typeof myIndexOf).toEqual('function');
    });
  
    it('returns a number', () => {
      let returnedValue = myIndexOf('i love apples', 'apples');
      expect(typeof returnedValue).toEqual('number');
    });
  
    it('returns the first instance of the searchValue in the source', () => {
      let returnedValue = myIndexOf('here and there', 'here');
      expect(returnedValue).toEqual(0);
    });
  
    it('returns the first instance of the searchValue at or after the startIdx', () => {
      let returnedValue = myIndexOf('here and there', 'here', 4);
      expect(returnedValue).toEqual(10);
    });
  
    it('returns -1 if the searchValue is not in the source', () => {
      let returnedValue = myIndexOf('here and there', 'nowhere');
      expect(returnedValue).toEqual(-1);
    });
  
  });
  
  var app = {
    db: null,
    init: function(){
      //try to open or create a database
      app.db = openDatabase('Pretend', '', 'Sample DB', 2 * 1024 * 1024, app.dbCreated); 
      document.getElementById("msg").innerHTML += 'app.init<br/>';
      if(app.db.version == ""){
        app.db.changeVersion("", "1.0", function(tx){
          document.getElementById("msg").innerHTML += 'db version updated<br/>';
          app.dbCreate();
        });
      }else{
        app.db = openDatabase('Pretend', '1.0', 'Sample DB', 2 * 1024 * 1024);
          document.getElementById("msg").innerHTML += 'db version 1 opened<br/>';
          //get the initial list of people
          app.fetchList();
      }
      
      //add the listener for adding people
      document.getElementById("btnAdd").addEventListener("click", app.addPerson);
    },
    dbCreate: function(){
      //called only if the DB has been created
      document.getElementById("msg").innerHTML += 'app.dbCreated<br/>';
      app.db.transaction(function (tx) {  
        tx.executeSql('DROP TABLE IF EXISTS people');
        tx.executeSql('CREATE TABLE people (person_id INTEGER PRIMARY KEY, full_name TEXT)');
        tx.executeSql('INSERT INTO people(full_name) VALUES("Rick")');
        tx.executeSql('INSERT INTO people(full_name) VALUES("Herschel")');
        tx.executeSql('INSERT INTO people(full_name) VALUES("Daryl")');
        document.getElementById("msg").innerHTML += 'records inserted <br/>';
        //get the initial list of people
        app.fetchList();
      },
      function(){
        //error in the transaction
      });
    },
    fetchList: function(){
      app.db.transaction(function(tx){
        tx.executeSql('SELECT full_name FROM people', [ ], 
          app.showList, 
          function(){
            //error running SQL statement
            document.getElementById("msg").innerHTML += 'Failed to fetch list of people';
        });
      }, 
      function(){
        console.log("transaction failed");
      });
    },
    showList: function(tx, results){
      var len = results.rows.length;
      var ul = document.getElementById("people");
      ul.innerHTML = "";
      for (var i = 0; i < len; i++) {
        var li = document.createElement("li");
        li.setAttribute("data-id", results.rows.item(i).person_id);
        li.textContent = results.rows.item(i).full_name;
        ul.appendChild(li);
      }
    },
    addPerson: function(ev){
      ev.preventDefault();
      var person = document.getElementById("newPerson").value;
      if(person != ""){
        app.db.transaction(function(tx){
          tx.executeSql('INSERT INTO people(full_name) VALUES(?)', [person], function(){
            //success
            app.fetchList();
            document.getElementById("newPerson").value = "";
          }, function(){
            //fail
            alert('Failed to insert new record');
          });
        });
      }
      
    }
  };
  
  document.addEventListener("DOMContentLoaded", app.init);