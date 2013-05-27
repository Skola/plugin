<?php

session_name(preg_replace('/[:\.\/-_]/', '', __FILE__));
if(!isset($_SESSION))
{
  session_start();
}
