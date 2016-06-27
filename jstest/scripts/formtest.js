/**
 * Created by Administrator on 2016/6/11.
 */
    function validate_email(field,alerttxt)
    {
        with (field)
        {
            apos=value.indexOf("@")
            dotpos=value.lastIndexOf(".")
            if (apos<1||dotpos-apos<2)
            {alert(alerttxt);return false}
            else {return true}
        }
    }

function validate_form(thisform)
{
    with (thisform)
    {
        if (validate_email(email,"Not a valid e-mail address!")==false)
        {email.focus();return false}
    }
}
