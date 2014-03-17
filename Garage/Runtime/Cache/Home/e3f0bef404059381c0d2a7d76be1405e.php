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
 <h1><?php echo $Think.ACTION_NAME ==='edit' ? '编辑' : '新增';?>维修项目</h1>

<div class="row" id="edit">
    <form method="post" action="<?php echo U('Type/save');?>"
        data-ajax-save-oncompleted="onAjaxSaveCompleted"
        widget="ajax-save validation"
        method="post"
        >
        <input type="hidden" name="type_id" value="<?php echo ($data["type_id"]); ?>">
        <table class="table table-input">
            <colgroup>
                <col width="1">
                <col width="100">
            </colgroup>
            <tbody>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>维修项目名称：</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control"
                               name="type_name"
                               value="<?php echo ($data["type_name"]); ?>" 
                               data-required="true"
                               data-required-message="非空"
                               data-error-container="#tipsCn"
                                >
                        <span class="error" id="tipsCn"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>维修项目说明</div></td>
                <td class="value">
                    <div>
                        <textarea name="type_describe" class="form-control" style="width:200px;height:100px;"><?php echo ($data["type_describe"]); ?></textarea>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>项目基本收费：</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control"
                               name="type_base_charge"
                               value="<?php echo ($data["type_base_charge"]); ?>" 
                               data-required="true"
                               data-required-message="非空"
                               data-error-container="#tipsAlp"
                                >
                        <span class="error" id="tipsAlp"></span>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="op">
            <input type="submit" class="btn btn-default" value="保存">
            <a class="btn btn-warning" href="">取消</a>
        </div>
    </form>
</div>
<script>
    // function onAjaxSaveCompleted(obj){
    //     console.log(obj.data);
    //     if (obj.data === true) {
    //         window.location.href = obj.data.url;
    //     }else{
            
    //     }
    // }
    
    function onAjaxSaveCompleted(obj) {
        if (obj.json.error) {
            util.modal({
                body: obj.json.message
            });
        } else {
            window.location.href = obj.json.data;
        }
        return false;
    }
</script>
</div>
</div>
<div id="sidebar">
    <div class="list-group">
<!--         <a class="list-group-item" href="ajax-upload.php">新增维修记录</a>
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