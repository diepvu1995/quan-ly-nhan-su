<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<div id="formLoaiQuyetDinh" class="modal fade" role="dialog">
	<form id="formTest" method="post" action="#" class="valida" autocomplete="off" novalidate="novalidate">
		<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">LOẠI QUYẾT ĐỊNH</h4>
				</div>
				<div class="modal-body">
					<input class="form-control" id="pk" type="hidden">
					<input class="form-control" id="version" type="hidden">
					<div class="form-group">
						<label for="tenLoaiQuyetDinh">Tên Loại Quyết Định</label> 
						<input class="form-control" id="tenLoaiQuyetDinh" name="tenLoaiQuyetDinh" required="true" type="text"></br>
					</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" id="btnCapNhap">Cập Nhập</button>
					<button type="button" class="btn btn-default" data-dismiss="modal" id="btnDong">Đóng</button>
				</div>
			</div>
		</div>
	</form>
</div>

