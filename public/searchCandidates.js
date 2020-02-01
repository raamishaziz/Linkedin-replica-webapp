function search1(){

  document.getElementById('result').innerHTML="";
  array = ["Muhammad Raamish", "Ali aziz", "Omer ijaz","Faisal aziz","ahmed fiaz","abdul hannan","Nabeel khaliq","hamza khan"]
  grad_date = [2018,2018,2018,2019,2020,2019,2019,2019];
  gpa_arr=[3.7,3.7,3.7,3.0,3.7,3.7,3.7,3.7];
  interests_arr=['web','IOS','IOS','web','IOS','Android','web','IOS']
  semNum_arr =[5,5,5,5,6,7,5,6];

  var grad = document.getElementById('grad-date');
  var selectedGrad = grad.options[grad.selectedIndex].text;

  var gpa1 =document.getElementById('Gpa')
  var selectedGpa = gpa1.options[gpa1.selectedIndex].text;

  var interests1 =document.getElementById('interests')
  var selectedInterest = interests1.options[interests1.selectedIndex].text;

  var semester1 =document.getElementById('semester')
  var selectedSemester = semester1.options[semester1.selectedIndex].text;

for(i=0;i<array.length;i++){
  if(selectedGrad==grad_date[i]){
    if(selectedGpa==gpa_arr[i]){
      if(selectedInterest==interests_arr[i]){
        if(selectedSemester==semNum_arr[i]){
          document.getElementById('result').innerHTML+="-"+array[i]+"<br>"
        }
      }
    }
  }
}

}
