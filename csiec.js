var forms = document.getElementsByClassName("formulation clearfix");
for (var i=0;i<forms.length;i++)
{
    var word = forms[i].getElementsByTagName("audio")[0].src.split('/')[4].split('.')[0].replace("%20", " ");
    forms[i].getElementsByTagName("input")[1].value = word;
}
