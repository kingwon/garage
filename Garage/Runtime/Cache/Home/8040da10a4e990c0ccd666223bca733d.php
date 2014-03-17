<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/Public/dist/style/base.css" />
    <!-- <link rel="stylesheet" href="http://static.fangdd.me/yun/v1/dist/style/base.css"> -->
    <!--<link rel="stylesheet/less" href="/static/yun/v1/style/bootstrap/bootstrap.less?<?php echo time() ?>">
    <link rel="stylesheet/less" href="/static/yun/v1/style/base.less?<?php echo time() ?>">-->
    <style type="text/css">
        .logo{font-size: 30px;margin-left: 5px;}
    </style>
</head>
<body>

<div id="wrap">
    <div id="hd">
        <!-- 顶部 -->
        <div id="top">
            <div class="well well-sm">
                <div class="row">
                    <div class="links">
<!--                         <dl>
                            <dt>常用链接：</dt>
                            <dd><a href="#">链接A</a></dd>
                            <dd><a href="#">链接B</a></dd>
                        </dl> -->
                    </div>
                    <div class="op">
                        <span class="name">2014-02-11 23:43:00</span>
                        <span class="name">下午好，兔子老板</span>
                        <!-- <a class="pw" href="">密码修改</a> -->
                        <span class="sep">|</span>
                        <a class="logout" href="">退出</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- 导航 -->
        <div id="nav">
            <div class="navbar navbar-default" role="navigation">
                <div class="navbar-header">
                    <!-- <a class="logo" href="#">强记汽修管理系统</a> -->
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li <?php echo $Think.CONTROLLER_NAME === 'Repair' ? 'class="active"' : '';?>><a href="<?php echo U('Repair/lists');?>">维修管理</a></li>
                        <li <?php echo $Think.CONTROLLER_NAME === 'Customer' ? 'class="active"' : '';?>><a href="<?php echo U('Customer/lists');?>">客户管理</a></li>
                        <li <?php echo $Think.CONTROLLER_NAME === 'Type' ? 'class="active"' : '';?>><a href="<?php echo U('Type/lists');?>">项目管理</a></li>
                        <li <?php echo $Think.CONTROLLER_NAME === 'Parts' ? 'class="active"' : '';?>><a href="<?php echo U('Parts/lists');?>">库存管理</a></li>
                        <li <?php echo $Think.CONTROLLER_NAME === 'System' ? 'class="active"' : '';?>><a href="<?php echo U('System/lists');?>">系统设置</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="bd">
        <div id="main">
            <div class="inner">
 <h1>客户列表</h1>
<div class="optbtn">
    <!-- <a class="btn btn-info" href="<?php echo U('repair/add');?>">新增维修记录</a> -->
</div>

<!-- 列表搜索区域 -->
<div class="row" id="list-search">
    <form method="post">
        <table class="table table-input">
            <colgroup>
                <col width="60">
            </colgroup>
            <tbody>
            <tr>
                <td class="key"><div>输入</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control" placeholder="输入" name="">
                        <button type="submit" class="btn btn-default">搜索</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </form>
</div>
<!-- /列表搜索区域 -->

<form method="post">
<!-- 列表表格区域 -->
<div class="row" id="list-grid">
    <table class="table table-bordered table-hover table-grid">
        <!-- <colgroup>
            <col width="30">
            <col width="100">
            <col>
            <col>
            <col width="150">
        </colgroup> -->
        
            <tr>
                <!-- <th><input type="checkbox" widget="check-all" data-check-all-target=".w-check-all"></th> -->
                <th>客户编号</th>
                <th>客户公司</th>
                <th>客户姓名</th>
                <th>客户联系方式</th>
                <th>车牌号</th>
                <!-- <th>操作</th> -->
            </tr>
        <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$val): $mod = ($i % 2 );++$i;?><tr>
                <!-- <th><input type="checkbox" widget="check-all" data-check-all-target=".w-check-all"></th> -->
                <td><?php echo ($val["customer_id"]); ?></td>
                <td><?php echo ($val["customer_company"]); ?></td>
                <td><?php echo ($val["customer_name"]); ?></td>
                <td><?php echo ($val["customer_phone"]); ?></td>
                <td><?php echo ($val["customer_car_number"]); ?></td>
                <!-- <td><a href="#">编辑</a></td> -->
            </tr><?php endforeach; endif; else: echo "" ;endif; ?>
        
    </table>
</div>
<!-- /列表表格区域 -->

<!-- 列表操作区域 -->
<div class="row" id="list-op">
    <!-- 全选 -->
<!--     <div class="check">
        <input type="checkbox" widget="check-all" data-check-all-target=".w-check-all">
        <button type="submit" class="btn btn-default" name="op" value="op1">批量操作</button>
        <button type="submit" class="btn btn-default" name="op" value="op2">批量操作</button>
    </div> -->
    <!-- 分页 -->
    <?php echo ($page); ?>
</div>
<!-- /列表操作区域 -->
</form>


</div>
</div>
<div id="sidebar">
    <div class="list-group">
        <!-- <a class="list-group-item" href="ajax-upload.php">新增维修记录</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a> -->
    </div>
</div>
</div>
</div>

<div id="ft">
    <p>&copy;强记汽车维修版权所有</p>
</div>
<script type="text/javascript" src="/Public/dist/js/lib.js"></script>
<script type="text/javascript" src="/Public/dist/js/base.js"></script>
<script type="text/javascript" src="/Public/js/frame.js"></script>
<!-- <script type="text/javascript" src="/Public/js/less-1/5/0.js"></script> -->
</body>
</html>