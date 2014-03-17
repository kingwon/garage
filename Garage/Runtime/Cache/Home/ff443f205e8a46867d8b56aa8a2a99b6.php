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
 <h1><?php echo $Think.ACTION_NAME ==='edit' ? '编辑' : '新增';?>维修记录</h1>

<div class="row" id="edit">
    <form method="post" action="<?php echo U('Repair/save');?>" data-ajax-save-oncompleted="onAjaxSaveCompleted"
        widget="ajax-save validation">
        <input type="hidden" value="<?php echo ($data["detail_id"]); ?>" name="detail_id">
        <table class="table table-input">
            <colgroup>
                <col width="1">
                <col width="100">
            </colgroup>
            <tbody>
            <tr>
                <td class="icon"><div><span class="icon-star"></span></div></td>
                <td class="key"><div>车牌号：</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control"
                               name="customer_car_number" 
                               value="<?php echo ($data["customer_car_number"]); ?>" 
                               data-required="true"
                               data-required-message="非空"
                               data-minlength="6"
                               data-minlength-message="最小长度为6"
                               data-error-container="#tipsMinlength"
                                >
                        <span class="text-muted">车牌号必须填写。填写格式：粤B:WW520</span>
                        <span class="error" id="tipsMinlength"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>客户姓名：</div></td>
                <td class="value">
                    <div>
                        <input type="hidden" value="<?php echo ($data["customer_id"]); ?>" name="customer_id">
                        <input type="text" class="form-control"
                               name="customer_name"
                               value="<?php echo ($data["customer_name"]); ?>" 
                               data-required="true"
                               data-required-message="非空"
                               data-regexp="^[\u4e00-\u9faf]+$"
                               data-regexp-message="只能输入汉字"
                               data-error-container="#tipsCn"
                                >
                        <span class="error" id="tipsCn"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>联系方式：</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control"
                               name="customer_phone"
                               value="<?php echo ($data["customer_phone"]); ?>" 
                               data-required="true"
                               data-required-message="非空"
                               data-type="digits"
                               data-type-digits-message="只能输入数字"
                               data-error-container="#tipsNumber"
                                >
                        <span class="error" id="tipsNumber"></span>
                        
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>客户公司\单位：</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control"
                               name="customer_company"
                               value="<?php echo ($data["customer_company"]); ?>" 
                               data-required="true"
                               data-required-message="非空"
                               data-error-container="#tipsAlp"
                                >
                        <span class="error" id="tipsAlp"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div><span class="icon-star"></span></div></td>
                <td class="key"><div>维修项目：</div></td>
                <td class="value">
                    <div>
                        <select class="form-control"
                                name="detail_fix_type_id" 
                                data-required="true"
                                data-error-message="请选择"
                                data-error-container="#detail_fix_type_id">
                            <option value="">请选择</option>
                            <?php if(is_array($type)): $i = 0; $__LIST__ = $type;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$type): $mod = ($i % 2 );++$i;?><option value="<?php echo ($key); ?>" <?php echo $key == $data['detail_fix_type_id'] ? 'selected' :'';?>><?php echo ($type); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                        <span class="error" id="detail_fix_type_id"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div><span class="icon-star"></span></div></td>
                <td class="key"><div>维修费用：</div></td>
                <td class="value">
                    <div>
                        <input type="text" class="form-control" id="password"
                               data-required="true"
                               value="<?php echo ($data["detail_fix_charge"]); ?>" 
                               name="detail_fix_charge" 
                               data-required-message="维修费用不能为空"
                               data-error-container="#tipsPw">
                        <span class="error" id="tipsPw"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"><div></div></td>
                <td class="key"><div>维修员工：</div></td>
                <td class="value">
                    <div>
                        <select class="form-control"
                                name="detail_fix_staff_id" 
                                data-required="true"
                                data-error-message="请选择"
                                data-error-container="#detail_fix_staff_id">
                            <option value="">请选择</option>
                            <?php if(is_array($staff)): $i = 0; $__LIST__ = $staff;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$staff): $mod = ($i % 2 );++$i;?><option value="<?php echo ($key); ?>" <?php echo $key == $data['detail_fix_staff_id'] ? 'selected' :'';?>><?php echo ($staff); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                        <span class="error" id="detail_fix_staff_id"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"></td>
                <td class="key"><div>维修时间：</div></td>
                <td class="value">
                    <div>
                        <input type="text" name="detail_fix_time" value="<?php echo ($data["detail_fix_time"]); ?>" class="form-control" style="width: 200px;" widget="datepicker" readonly>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"></td>
                <td class="key"><div>维修配件：</div></td>
                <td class="value">
                    <div>
                        <select class="form-control"
                                name="detail_fix_parts_id"
                                data-required="true"
                                data-error-message="请选择"
                                data-error-container="#detail_fix_parts_id">
                            <option value="<?php echo ($data["detail_car_number"]); ?>">请选择</option>
                            <?php if(is_array($parts)): $i = 0; $__LIST__ = $parts;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$parts): $mod = ($i % 2 );++$i;?><option value="<?php echo ($key); ?>" <?php echo $key == $data['detail_fix_parts_id'] ? 'selected' :'';?>><?php echo ($parts); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                        <span class="error" id="detail_fix_parts_id"></span>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="icon"></td>
                <td class="key"><div>维修备注：</div></td>
                <td class="value">
                    <div>
                        <textarea name="detail_fix_describe" class="form-control" style="width:200px;height:100px;"><?php echo ($data["detail_fix_describe"]); ?></textarea>
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