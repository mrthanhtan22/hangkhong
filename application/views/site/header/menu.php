 <style>
 	.navbar {
    margin-bottom: 0;
    background-color:  #013B7B;
    z-index: 9999;
    border: 0;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    letter-spacing: 4px;
    border-radius: 0;
}

.navbar li a, .navbar .navbar-brand {
    color: #fff !important;
}

.navbar-nav li a:hover, .navbar-nav li.active a {
    color: #0C97DF !important;
    background-color: #fff !important;
}

.navbar-default .navbar-toggle {
    border-color: transparent;
    color: #fff !important;
}
 </style>
 <nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header" style="margin-left:-8px">
      <a  href="<?php echo site_url() ?>"><img   src="<?php echo public_url('site') ?>/images/logo.png" class="img-responsive" alt="Image"></a>
      <a class="dt_mobile" style="color:#fff;font-size:15px" href="<?php echo site_url('lienhe') ?>">(08)3820.89.19-(08)6251.99.11</a>
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        
    </div>
    <div class="collapse navbar-collapse" id="myNavbar" style="margin-top:20px" >
    
      <ul class="nav navbar-nav navbar-right">
        <li><a href="<?php echo site_url('vequocte') ?>">VÉ QUỐC TẾ</a></li>
        <li><a href="<?php echo site_url('vetrongnuoc') ?>" >VÉ TRONG NƯỚC</a></li>
        <li><a href="<?php echo site_url('vetheohang') ?>" >VÉ THEO HÃNG</a></li>
        <li><a href="<?php echo site_url('tintuc') ?>" >TIN TỨC</a></li>
        <li><a href="<?php echo site_url('tintuc/khuyenmai') ?>" >KHUYẾN MÃI</a></li>
        <li><a href="<?php echo site_url('lienhe') ?>" >LIÊN HỆ</a></li>
      </ul>
     
    </div>
  </div>
</nav>

<div class="clear" style="margin-top: 100px"></div>
