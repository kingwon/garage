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
                    <a class="logo" href="#">强记汽修管理系统</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="../wg/ajax-upload.php">维修管理</a></li>
                        <li><a href="../wg/ajax-upload.php">客户管理</a></li>
                        <li><a href="../ss/button.php">库存管理</a></li>
                        <li><a href="../wg/ajax-upload.php">系统设置</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="bd">
        <div id="main">
            <div class="inner">
 <h1>维修记录</h1>
<div class="optbtn">
    <a class="btn btn-info" href="#">新增按钮</a>
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
        <colgroup>
            <col width="30">
            <col width="100">
            <col>
            <col>
            <col width="150">
        </colgroup>
        <tr>
            <th><input type="checkbox" widget="check-all" data-check-all-target=".w-check-all"></th>
            <th>车牌号</th>
            <th>客户公司</th>
            <th>客户姓名</th>
            <th>客户联系方式</th>
            <th>维修日期</th>
            <th>维修内容</th>
            <th>维修费用</th>
            <th>维修人员</th>
            <th>操作</th>
        </tr>
        <tr>
            <td><input type="checkbox" class="w-check-all" name="cb" value="1"></td>
            <td>粤Bxx520</td>
            <td>旺仔科技有限公司</td>
            <td>兔老板</td>
            <td>13800013800</td>
            <td>2014-2-12 12:00:30</td>
            <td>更换发动机</td>
            <td>10000元整</td>
            <td>小李</td>
            <td>
                <a type="button" class="btn btn-default" href="">按钮</a>
                <a type="button" class="btn btn-danger" widget="confirm" href="">删除</a>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox" class="w-check-all" name="cb" value="1"></td>
            <td>粤Bxx520</td>
            <td>旺仔科技有限公司</td>
            <td>兔老板</td>
            <td>13800013800</td>
            <td>2014-2-12 12:00:30</td>
            <td>更换发动机</td>
            <td>10000元整</td>
            <td>小李</td>
            <td>
                <a type="button" class="btn btn-default" href="">按钮</a>
                <a type="button" class="btn btn-danger" widget="confirm" href="">删除</a>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox" class="w-check-all" name="cb" value="1"></td>
            <td>粤Bxx520</td>
            <td>旺仔科技有限公司</td>
            <td>兔老板</td>
            <td>13800013800</td>
            <td>2014-2-12 12:00:30</td>
            <td>更换发动机</td>
            <td>10000元整</td>
            <td>小李</td>
            <td>
                <a type="button" class="btn btn-default" href="">按钮</a>
                <a type="button" class="btn btn-danger" widget="confirm" href="">删除</a>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox" class="w-check-all" name="cb" value="1"></td>
            <td>粤Bxx520</td>
            <td>旺仔科技有限公司</td>
            <td>兔老板</td>
            <td>13800013800</td>
            <td>2014-2-12 12:00:30</td>
            <td>更换发动机</td>
            <td>10000元整</td>
            <td>小李</td>
            <td>
                <a type="button" class="btn btn-default" href="">按钮</a>
                <a type="button" class="btn btn-danger" widget="confirm" href="">删除</a>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox" class="w-check-all" name="cb" value="1"></td>
            <td>粤Bxx520</td>
            <td>旺仔科技有限公司</td>
            <td>兔老板</td>
            <td>13800013800</td>
            <td>2014-2-12 12:00:30</td>
            <td>更换发动机</td>
            <td>10000元整</td>
            <td>小李</td>
            <td>
                <a type="button" class="btn btn-default" href="">按钮</a>
                <a type="button" class="btn btn-danger" widget="confirm" href="">删除</a>
            </td>
        </tr>
        
    </table>
</div>
<!-- /列表表格区域 -->

<!-- 列表操作区域 -->
<div class="row" id="list-op">
    <!-- 全选 -->
    <div class="check">
        <input type="checkbox" widget="check-all" data-check-all-target=".w-check-all">
        <button type="submit" class="btn btn-default" name="op" value="op1">批量操作</button>
        <button type="submit" class="btn btn-default" name="op" value="op2">批量操作</button>
    </div>
    <!-- 分页 -->
    <div class="page">
        <ul class="pagination">
            <li><span>共100页</span></li>
            <li class="active"><span>1</span></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><span>...</span></li>
            <li><a href="#">100</a></li>
            <li><a href="#">&laquo;</a></li>
            <li><a href="#">&raquo;</a></li>
        </ul>
    </div>
</div>
<!-- /列表操作区域 -->
</form>


</div>
</div>
<div id="sidebar">
    <div class="list-group">
        <a class="list-group-item" href="ajax-upload.php">新增维修记录</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
        <a class="list-group-item" href="auto-complete.php">新增库存</a>
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
<script type="text/javascript" src="/Public/js/less-1/5/0.js"></script>
</body>
</html>