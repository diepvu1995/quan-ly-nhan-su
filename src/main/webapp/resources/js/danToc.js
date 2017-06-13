$(document).ready(function() {
		var danTocService = "/danTocService";
		var danTocController = "/danTocController";
		var table = $('#DanTocTable').DataTable({
			"sAjaxSource" : danTocService+"/getAll",
			"sAjaxDataProp" : "",
			"order" : [ [ 0, "asc" ] ],
			"aoColumnDefs": [ 
			      {
				       "aTargets": [ 0 ],
				       "mData": "tenDanToc"
			      },
				  {
				       "targets": -1,
				       "data": null,
				       "defaultContent": "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' id='btnDel'>Xóa</button>"
			      },
			      {
					   "targets": -2,
					   "data": null,
					   "defaultContent": "<button type='button' class='btn btn-info btn-lg' data-toggle='modal' id='btnUpdate'>Sửa</button>"
				  },
			],
			scrollY : "600px",
			scrollCollapse: true,
			dom: 'Blfrtip',
			buttons: [
			          {
		                 text: 'THÊM DÂN TỘC',
		                 action: function ( e, dt, node, config ) {
		                	 var txtPk = $(pk);
		                	 var txtTenDanToc=$(tenDanToc);
		                	 var txtVersion = $(version);
		                	 txtPk.val(-1);
		                	 txtTenDanToc.val("");
		                	 txtVersion.val("");
		                     $('#formDanToc').modal('show');
		                 },
		              }
			          ],
		    colReorder: true,
		    select: true,
		    "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.13/i18n/Vietnamese.json"
            }
		});
	
		$('#DanTocTable tbody').on( 'click', 'button', function () {
			var id = $(this)[0].id;
			if("btnDel" == id){
	        var data = table.row($(this).parents('tr')).data();
	        check = confirm("Bạn có chắc chắn muốn xóa đối tượng : " + data['tenDanToc'])
                var pK = data['pk'];
	        	var version = data['version'];
	            if(check==true){
	            	$.ajax({  
	                    url: danTocController+"/delete/"+pK+"?version="+version,  
	                    type: 'DELETE',  
	                    success: function (res) {
	                    	alert("Xóa Thành Công");
	                    	table.ajax.reload();	                    }  
	                });
	            }
                    
			}
	    });
		
		$('#DanTocTable tbody').on( 'click', 'button', function () {
			var id = $(this)[0].id;
			if("btnUpdate" == id){
					var data = table.row($(this).parents('tr')).data();
                    var pK = data['pk'];
					var txtPk = $(pk);
                	var txtTenDanToc=$(tenDanToc);
                	var txtVersion = $(version);
	            	$.ajax({  
	                    url: danTocService+"/getById/"+pK,  
	                    type: 'GET',  
	                    success: function (res) {
	                    	 txtPk.val(pK);
		                	 txtTenDanToc.val(res.tenDanToc);
		                	 txtVersion.val(res.version);
		                     $('#formDanToc').modal('show');
	                    }
	                });
			}	
	    });
		
		//twitter bootstrap btnCapNhap
    	$("#btnCapNhap").click(function(e) {
    		var endpointUrl = '/danTocController/add';
    		var txtPk = $(pk);
        	var txtTenDanToc=$(tenDanToc);
        	var txtVersion = $(version);
            var json = new Object();
            json.pk = txtPk.val();
            json.tenDanToc = txtTenDanToc.val();
            json.version = txtVersion.val();
            if(txtPk.val() != -1){
            	var endpointUrl = '/danTocController/update';
            }
            var invalidFields = $("#formTest").find(":invalid");
            if(invalidFields.length == 0){
	            $.ajax({
	                type : "POST",
	                contentType: "application/json; charset=utf-8",
	                data : JSON.stringify(json),
	                url : endpointUrl,
	                success : function(msg) {
	                	$('#formDanToc').modal('toggle');
	                    table.ajax.reload();
	                },
            		error: function (data, textStatus, xhr) {
            			alert(data.responseText);
            		}
	            });
            } else {
            	$("#formTest").submit();
            }    
        });
    	
    	$("button#btnDong").click(function(e) {
    		var txtTenDanToc=$(tenDanToc);
         	txtTenDanToc.val("");
        }); 
    	$("#formDanToc").on('hidden.bs.modal', function () {
            $("#formTest").find('.has-error').removeClass("has-error");
            $("#formTest").find('.has-feedback').removeClass("has-feedback");
        });
} );	 