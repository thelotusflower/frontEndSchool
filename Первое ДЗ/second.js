function tableToObj(tableId) {
	var table = document.getElementById(tableId);
  var rows = table.rows;
  var parsers = new Map([
  	['int', parseInt],
    ['float', parseFloat],
    ['date', Date.parse],
  ]);
  var objList = [];
  
  var attributeNames = Array.from(rows[0].cells).map(function (el) {
  		return {"name": el.innerText, "type": el.getAttribute("data-type")} 
    }
  );

  for(i = 1; i < rows.length; i ++) {
  	var obj = {};
  	
    for(j = 0; j < rows[i].cells.length; j++){
    	attribute = attributeNames[j];
      cell = rows[i].cells[j];
      
      if (attribute.type){
      	parser = parsers.get(attribute.type);
    		obj[attribute.name] = parser(cell.innerText);
      } else {
      	obj[attribute.name] = cell.innerText;
      }
 
    }
    
    return objList.push(obj);
  }
}

tableToObj("table");