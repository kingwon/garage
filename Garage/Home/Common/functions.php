<?php
    /**
     * 输出json数据
     * 
     * @param type $error
     * @param type $message
     * @param type $data
     */
    function json($error, $message = null, $data = null) {
        header('Content-Type:application/json');
        $jsonData = array(
            'error' => $error ? true : false,
            'message' => $message,
            'data' => $data,
        );
        exit(json_encode($jsonData));
    }