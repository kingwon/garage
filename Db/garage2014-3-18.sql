/*
Navicat MySQL Data Transfer

Source Server         : loalhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : garage

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2014-03-17 20:39:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for garage_customer
-- ----------------------------
DROP TABLE IF EXISTS `garage_customer`;
CREATE TABLE `garage_customer` (
  `customer_id` int(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '客户id',
  `customer_name` varchar(25) DEFAULT '' COMMENT '客户姓名',
  `customer_car_number` varchar(15) NOT NULL DEFAULT '' COMMENT '车牌号',
  `customer_phone` bigint(15) unsigned DEFAULT NULL COMMENT '客户电话',
  `customer_company` varchar(25) DEFAULT '' COMMENT '客户公司/单位',
  `customer_gender` tinyint(1) unsigned DEFAULT '0' COMMENT '客户性别；0：保密，1：男，2：女',
  `customer_age` int(5) unsigned DEFAULT '0' COMMENT '客户年纪；0：保密；1:15-25；2:26-35；3:36-45；4:46-55；5:56-65；6：65以上；',
  `customer_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `customer_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `customer_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `customer_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='客户表';

-- ----------------------------
-- Records of garage_customer
-- ----------------------------
INSERT INTO `garage_customer` VALUES ('2', '刘的邓', '粤B:H114H', '15519855734', '韦兔子公司', '1', '70', '0', '2014-01-02 01:41:00', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('3', '何华', '粤B:H197H', '15576789948', '吴的邓公司', '2', '91', '0', '2014-01-02 01:40:57', '1', '2014-03-17 20:00:03');
INSERT INTO `garage_customer` VALUES ('4', '吴艹韦', '粤B:H145H', '15523382542', '孙华公司', '1', '94', '0', '2014-01-02 01:40:49', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('5', '徐兔子', '粤B:H133H', '15585542870', '何修孙公司', '1', '106', '0', '2014-01-02 01:41:01', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('6', '韦华', '粤B:H129H', '15556566729', '何是吴公司', '2', '49', '0', '2014-01-02 01:42:07', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('7', '徐艹韦', '粤B:H146H', '15525205038', '刘红公司', '1', '77', '0', '2014-01-02 01:42:08', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('8', '吴伦', '粤B:H144H', '15147483647', '韦修孙公司', '2', '96', '0', '2014-01-02 01:42:08', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('9', '何伦', '粤B:H183H', '15247483647', '孙华公司', '1', '66', '0', '2014-01-02 01:42:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('10', '李艹韦', '粤B:H184H', '18847483647', '孙红公司', '2', '37', '0', '2014-01-02 01:42:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('11', '徐红', '粤B:H170H', '15555325006', '吴红公司', '2', '116', '0', '2014-01-02 01:42:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('12', '谢是吴', '粤B:H100H', '15510000992', '孙修孙公司', '1', '113', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('13', '谢艹韦', '粤B:H188H', '15533074591', '李艹韦公司', '1', '47', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('14', '韦伦', '粤B:H143H', '15502483647', '韦的邓公司', '2', '49', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('15', '徐兔子', '粤B:H152H', '15522223647', '何修孙公司', '1', '118', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('16', '何红', '粤B:H129H', '15564343196', '徐修孙公司', '2', '18', '0', '2014-01-02 01:42:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('17', '刘修孙', '粤B:H192H', '15521492213', '谢伦的公司', '2', '76', '0', '2014-01-02 01:43:33', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('18', '谢艹韦', '粤B:H172H', '15513431477', '韦伦的公司', '1', '107', '0', '2014-01-02 01:43:33', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('19', '谢修孙', '粤B:H183H', '15516807520', '谢华的公司', '2', '28', '0', '2014-01-02 01:44:34', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('20', '李是吴', '粤B:H101H', '15425913792', '吴是吴的公司', '2', '103', '0', '2014-01-02 01:48:50', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('21', '徐艹韦', '粤B:H157H', '15729205750', '徐的邓的公司', '2', '54', '0', '2014-01-02 01:49:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('22', '谢是吴', '粤B:H181H', '15316655640', '李的邓的公司', '1', '109', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('23', '韦是吴', '粤B:H137H', '15101126005', '谢是吴的公司', '2', '78', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('24', '徐旺', '粤B:H143H', '15176266986', '徐修孙的公司', '1', '27', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('25', '邓红', '粤B:H102H', '15475617057', '徐是吴的公司', '1', '48', '0', '2014-01-02 01:49:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('26', '吴旺', '粤B:H181H', '15604061477', '孙旺的公司', '2', '38', '0', '2014-01-02 01:49:11', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('30', '沙发', '粤B:H100H', '15588888822', '到是否健康', '0', '0', '1', '2014-12-03 00:33:07', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('32', '杨呵呵额', '粤S:MH370', '15588888822', '房多多', '0', '0', '1', '2014-03-17 20:06:06', '1', '2014-03-17 20:12:27');
INSERT INTO `garage_customer` VALUES ('33', '何俊', '闽F:JJ223', '18959195566', '私卖', '0', '0', '1', '2014-03-17 20:13:23', '1', '2014-08-03 20:13:23');
INSERT INTO `garage_customer` VALUES ('34', '周鸿祎', '闽F:360SB', '15522200333', '360流氓', '0', '0', '1', '2014-03-17 20:16:17', '1', '2014-08-03 20:16:17');
INSERT INTO `garage_customer` VALUES ('35', '睡觉觉', '粤C:DSD88', '15657702696', 'fdd', '0', '0', '1', '2014-03-17 20:17:17', '1', '2014-08-03 20:17:17');
INSERT INTO `garage_customer` VALUES ('36', '大师傅', '粤B:D1D88', '15633300114', '兔子有限公司', '0', '0', '1', '2014-03-17 20:29:32', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_customer` VALUES ('37', '威爷', '粤J:HH340', '155877789987', 'dff', '0', '0', '1', '2014-03-17 20:34:56', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for garage_detail
-- ----------------------------
DROP TABLE IF EXISTS `garage_detail`;
CREATE TABLE `garage_detail` (
  `detail_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '流水id',
  `customer_id` int(5) unsigned DEFAULT NULL COMMENT '客户id',
  `detail_fix_type_id` int(11) DEFAULT NULL COMMENT '维修事项',
  `detail_fix_charge` decimal(11,2) DEFAULT NULL COMMENT '维修费用',
  `detail_fix_staff_id` int(11) DEFAULT NULL COMMENT '维修员工',
  `detail_fix_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '维修时间',
  `detail_fix_parts_id` int(11) unsigned DEFAULT NULL COMMENT '维修配件（应可选，从库存里来，计算成本）',
  `detail_fix_describe` varchar(25) DEFAULT '' COMMENT '维修记录备注',
  `detail_create_by` int(11) unsigned NOT NULL COMMENT '流水创建人',
  `detail_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '流水创建时间',
  `detail_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `detail_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`detail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COMMENT='维修流水表';

-- ----------------------------
-- Records of garage_detail
-- ----------------------------
INSERT INTO `garage_detail` VALUES ('1', '32', '1', '20.00', '1', '2014-03-17 00:00:00', '1', '李某某', '0', '2014-03-17 20:11:36', '1', '2014-08-03 20:12:27');
INSERT INTO `garage_detail` VALUES ('3', '33', '4', '30.00', '2', '2014-12-02 00:27:21', '1', '李某某今天修了保险杠', '0', '2014-12-02 00:27:21', '1', '2014-08-03 20:13:23');
INSERT INTO `garage_detail` VALUES ('4', '34', '8', '30.00', '3', '2014-12-02 00:27:27', '1', '李某某今天修了保险杠', '0', '2014-12-02 00:27:27', '1', '2014-08-03 20:16:17');
INSERT INTO `garage_detail` VALUES ('5', '3', '6', '430.22', '3', '2014-12-02 00:28:42', '4', '李某某今天修了保险杠', '0', '2014-12-02 00:28:42', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('6', '6', '4', '230.22', '6', '2014-12-02 00:28:44', '9', '李某某今天修了保险杠', '0', '2014-12-02 00:28:44', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('7', '3', '5', '630.22', '1', '2014-12-02 00:33:23', '3', '李某某今天修了保险杠', '0', '2014-12-02 00:33:23', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('8', '4', '9', '630.22', '8', '2014-12-02 00:33:24', '7', '李某某今天修了保险杠', '0', '2014-12-02 00:33:24', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('9', '2', '3', '330.22', '7', '2014-12-02 00:36:06', '4', '李某某今天修了保险杠', '0', '2014-12-02 00:36:06', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('10', '7', '8', '430.22', '5', '2014-12-02 00:44:20', '6', '李某某今天修了保险杠', '0', '2014-12-02 00:44:20', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('11', '35', '2', '30.00', '3', '2014-03-12 00:00:00', '1', '兔兔的朋友', '0', '0000-00-00 00:00:00', '1', '2014-08-03 20:17:17');
INSERT INTO `garage_detail` VALUES ('12', null, '2', '30.00', '3', '2014-03-12 00:00:00', '1', '', '0', '0000-00-00 00:00:00', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('13', '8', '1', '830.22', '9', '2014-11-03 23:50:23', '7', '李某某今天修了爱情南通', '0', '2014-11-03 23:50:23', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('14', '2', '6', '630.22', '9', '2014-11-03 23:50:57', '9', '李某某今天修了爱情南通', '0', '2014-11-03 23:50:57', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('15', '4', '1', '230.22', '5', '2014-11-03 23:52:46', '4', '李某某今天修了爱情南通', '0', '2014-11-03 23:52:46', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('29', '28', '1', '302.00', '1', '2014-03-28 00:00:00', '2', '倒萨恢复健康和健康', '1', '2014-12-03 00:28:44', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('30', '29', '1', '302.00', '1', '2014-03-28 00:00:00', '2', '倒萨恢复健康和健康', '1', '2014-12-03 00:31:29', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('31', '30', '1', '302.00', '1', '2014-03-28 00:00:00', '2', '倒萨恢复健康和健康', '1', '2014-12-03 00:33:07', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('33', '36', '3', '500.00', '1', '2014-03-28 00:00:00', '1', '撒旦法', '1', '2014-08-03 20:29:32', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_detail` VALUES ('34', '37', '2', '600.00', '2', '2014-03-28 00:00:00', '1', '的萨菲大', '1', '2014-08-03 20:34:56', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for garage_parts
-- ----------------------------
DROP TABLE IF EXISTS `garage_parts`;
CREATE TABLE `garage_parts` (
  `parts_id` int(15) unsigned NOT NULL AUTO_INCREMENT COMMENT '配件id',
  `parts_name` varchar(15) CHARACTER SET utf8 DEFAULT '' COMMENT '配件名称',
  `parts_cost` decimal(9,2) DEFAULT '0.00' COMMENT '配件进货价',
  `parts_size` varchar(100) CHARACTER SET utf8 DEFAULT '' COMMENT '配件尺寸',
  `parts_describe` varchar(100) CHARACTER SET utf8 DEFAULT '' COMMENT '配件说明',
  `parts_supplier` varchar(25) CHARACTER SET utf8 DEFAULT '' COMMENT '配件供应商',
  `parts_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `parts_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `parts_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `parts_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`parts_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of garage_parts
-- ----------------------------
INSERT INTO `garage_parts` VALUES ('1', '刹车片', '30.00', '30.00', 'adsfadsads', '强记', '1', '2014-03-17 00:06:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_parts` VALUES ('2', '刹车片2', '30.00', '30cm*40cm*50cm', 'adsfadsf', '强记', '1', '2014-03-17 00:07:30', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for garage_repair_type
-- ----------------------------
DROP TABLE IF EXISTS `garage_repair_type`;
CREATE TABLE `garage_repair_type` (
  `type_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '维修项目id',
  `type_name` varchar(25) CHARACTER SET utf8 DEFAULT '' COMMENT '维修项目名称（如钣金等）',
  `type_describe` varchar(25) CHARACTER SET utf8 DEFAULT '' COMMENT '项目描述',
  `type_base_charge` decimal(9,2) DEFAULT NULL COMMENT '项目基本收费',
  `type_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `type_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `type_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `type_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of garage_repair_type
-- ----------------------------
INSERT INTO `garage_repair_type` VALUES ('1', '钣金3', '钣金哦哦', '200.26', '1', '2014-02-28 00:55:00', '1', '2014-03-16 23:31:00');
INSERT INTO `garage_repair_type` VALUES ('2', '洗车', '全套服务哦', '300.50', '1', '2014-02-28 00:56:10', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('3', '换胎', '社会化', '2323.32', '1', '2014-02-28 01:30:43', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('4', '马达', '马达哦 哦', '5000.00', '1', '2014-03-16 23:35:36', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('5', '补胎', '补胎哦哦哦哦', '300.00', '1', '2014-03-16 23:40:04', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('6', '补胎', '补胎哦哦哦哦', '300.00', '1', '2014-03-16 23:40:26', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('7', '打算反倒是', '倒萨发', '12.00', '1', '2014-03-16 23:40:50', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('8', '汪汪汪', '是等法定是', '12.00', '1', '2014-03-16 23:43:36', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('9', 'esa4', 'dsfas', '12.00', '1', '2014-03-17 00:03:35', '1', '2014-03-17 18:35:07');
INSERT INTO `garage_repair_type` VALUES ('10', 'dsafas222', 'dsfadsfdsa的萨芬撒发', '124.00', '1', '2014-03-17 00:04:02', '1', '2014-03-17 18:11:18');
INSERT INTO `garage_repair_type` VALUES ('11', '', '', null, '1', '2014-03-17 00:05:28', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('12', '底梁', '倒萨开奖号', '230.00', '1', '2014-03-17 18:25:53', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('13', '底梁44', '倒萨开奖号', '230.00', '1', '2014-03-17 18:27:25', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_repair_type` VALUES ('14', '底梁55', '倒萨开奖号发给', '230.00', '1', '2014-03-17 18:28:07', '0', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for garage_staff
-- ----------------------------
DROP TABLE IF EXISTS `garage_staff`;
CREATE TABLE `garage_staff` (
  `staff_id` int(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '员工id',
  `staff_name` varchar(10) DEFAULT '' COMMENT '员工姓名',
  `staff_mobile` bigint(15) unsigned DEFAULT NULL COMMENT '员工手机',
  `staff_birthday` date DEFAULT '0000-00-00' COMMENT '员工生日',
  `staff_family_contact` bigint(15) unsigned DEFAULT NULL COMMENT '员工家庭联系方式',
  `staff_family_address` varchar(25) DEFAULT '' COMMENT '员工家庭地址',
  `staff_now_address` varchar(25) DEFAULT '' COMMENT '员工现居地',
  `staff_create_by` int(11) unsigned NOT NULL COMMENT '创建人',
  `staff_create_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `staff_last_modify_by` int(11) unsigned NOT NULL COMMENT '最后修改人',
  `staff_last_modify_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '最后一次修改时间',
  PRIMARY KEY (`staff_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='员工表';

-- ----------------------------
-- Records of garage_staff
-- ----------------------------
INSERT INTO `garage_staff` VALUES ('1', 'admin', '15502003496', '0000-00-00', '4294967295', '福建上杭', '坂田', '1', '2014-02-27 00:46:13', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_staff` VALUES ('2', 'tu兔子', '15502003495', '0000-00-00', '15555546633', '龙山', '五和', '1', '2014-02-28 00:46:09', '0', '0000-00-00 00:00:00');
INSERT INTO `garage_staff` VALUES ('3', '小兔兔', '15444424566', '0000-00-00', null, '订单', '不急', '1', '2014-02-28 00:46:58', '0', '0000-00-00 00:00:00');
