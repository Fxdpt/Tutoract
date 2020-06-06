<?php

namespace App\Service;

class JsonHandler
{
    public static function clearInput(array $deserializedArray) : array
    {
        $cleanArray = [];
        foreach($deserializedArray as $inputName => $inputValue){
            if (gettype($inputValue) !== 'array'){
                $inputValue = trim($inputValue);
                $inputValue = htmlspecialchars($inputValue);
                $cleanArray[$inputName] = $inputValue;
            } else {
                $inputValue = self::clearInput($inputValue);
                $cleanArray[$inputName] = $inputValue;
            }
        }

        return $cleanArray;
    }

    public static function responseHandler(bool $success, string $message) : array
    {
        $response =
        [
            "success" => $success,
            "message" => $message,
        ];

        return $response;
    }

    public static function clearToDeserializer(string $jsonData) : string
    {
        $requestContent = json_decode($jsonData,true);
        $requestContent = self::clearInput($requestContent);
        $requestContent = json_encode($requestContent);

        return $requestContent;
    }

}