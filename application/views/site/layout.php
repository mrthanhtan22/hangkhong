<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
	<?php $this->load->view('site/head',$this->data); ?>
	
</head>
<body class="page1" id="top">
<!--header -->
	<header>
		<?php $this->load->view('site/header/menu'); ?>
	</header>
		
		<?php $this->load->view('site/slider/slide',$this->data); ?>
	
<!-- end header -->

<!--contetnt-->
	
<div class="content">
	<div class="ic">Liên kết toàn cầu</div>
		<div class="container_12">

		<div class="container_12 tin_khuyemai">
			<?php $this->load->view('site/vekhuyenmai', $this->data); ?>
		</div>
		<div class="container_12 giave_khuyenmai">
			<?php $this->load->view('site/giave', $this->data) ?>
		</div>
		
		<div class="panel panel-info">
			<div class="panel-heading">
				<div class="container_12 timve_may_bay">
					<?php $this->load->view('site/searchve/search'); ?>

					<?php $this->load->view('site/trangchu', $this->data); ?>
				</div>
			</div>
			
		</div>

		
	<!---dichvu-->
	
		<div class="container_12 dichvu_khuyenmai">
		<?php $this->load->view('site/dichvu'); ?>
		</div>
	<!--end dichvu-->
			
			



		<div class="panel panel-success">
			<div class="panel-heading">
			<div class="container_12 khuyenmai_moinhat">
			<?php $this->load->view('site/tinmoi', $this->data); ?>
			</div>
		</div>
		</div>
		
		</div>
</div>
	




<!--end content-->



 <!-- footer -->
 	
	<!--<div class="progress" style="margin-bottom:0px !important">
	    <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
	      
	    </div>

	</div>-->
	<div class="row" style="margin-top:-60px; margin-bottom:-5px; background-image: url('<?php echo public_url('site') ?>/images/background_footer.png'); height:200px; width:100%" >
	</div>
 	<footer id="lienhe" class="footer"  role="contentinfo">
 		<?php $this->load->view('site/footer'); ?>
 	</footer>
 		<?php $this->load->view('site/js'); ?>
 <!-- end footer -->
</body>
</html>