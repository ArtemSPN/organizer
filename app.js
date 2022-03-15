    const placeholders = document.querySelectorAll('.placeholder');
    const zametkibtn = document.querySelector('.glo1');
    const zametki = document.querySelector('.zametki');
    const reminder = document.querySelector('.reminder');
    const reminderbtn = document.querySelector('.glo3');
    const finbtn = document.querySelector('.glo2');
    const zam_crt_btn = document.getElementById('zam-crt');
    let zametki_title;
    let zametki_content;
    const plus = document.querySelector('.plus');
    const crt_zam = document.querySelector('.crt-zam');
    const read_zam = document.querySelector('.read-zam');
    const win_zam_title = document.querySelector('.title-zametka');
    const win_zam_content = document.querySelector('.content-zametka');
    const ztitle = document.querySelector('.ztitle');
    const title_1 = document.querySelector('.title_1');
    const title_2 = document.querySelector('.title_2');
    const title_3 = document.querySelector('.title_3');
    const content_1 = document.querySelector('.first_block_content');
    const content_2 = document.querySelector('.second_block_content');
    const content_3 = document.querySelector('.third_block_content');
    let actual_t = [title_1, title_2, title_3];
    let actual_c = [content_1, content_2, content_3];
    const pop_title_1 = document.querySelector('.popupz1_title');
    const pop_title_2 = document.querySelector('.popupz2_title');
    const pop_title_3 = document.querySelector('.popupz3_title');
    const pop_txt_1 = document.querySelector('.popupz1_text');
    const pop_txt_2 = document.querySelector('.popupz2_text');
    const pop_txt_3 = document.querySelector('.popupz3_text');
    const item_1 = document.querySelector('.item_1');
    const item_2 = document.querySelector('.item_2');
    const item_3 = document.querySelector('.item_3');
    const item_4 = document.querySelector('.item_4');
    const check = document.querySelectorAll('.check');
    const placeholder = document.querySelectorAll('.placeholder');
    const punkt1 = document.querySelector('.p1');
    const punkt2 = document.querySelector('.p2');
    const punkt3 = document.querySelector('.p3');
    const punkt4 = document.querySelector('.p4');
    const punkt5 = document.querySelector('.p5');
    const punkt6 = document.querySelector('.p6');
    const punkt7 = document.querySelector('.p7');
    const punkt8 = document.querySelector('.p8');
    const punkt9 = document.querySelector('.p9');
    const punkt10 = document.querySelector('.p10');
    const punkt11 = document.querySelector('.p11');
    const punkt12 = document.querySelector('.p12');
    const punkt13 = document.querySelector('.p13');
    const punkt14 = document.querySelector('.p14');
    const punkt15 = document.querySelector('.p15');
    const punkt16 = document.querySelector('.p16');
    const punkt17 = document.querySelector('.p17');
    const punkt18 = document.querySelector('.p18');
    const punkt19 = document.querySelector('.p19');
    const punkt20 = document.querySelector('.p20');
    const punkt21 = document.querySelector('.p21');
    const punkt22 = document.querySelector('.p22');
    const punkt23 = document.querySelector('.p23');
    const punkt24 = document.querySelector('.p24');
    const punkt25 = document.querySelector('.p25');
    
    
    


    const colors = ['#FF2E18', '#F46E8F', '#1843FF', '#2DFF18', '#DEFA70', '#5C009F'];
    
    
    let items = [item_1,item_2,item_3,item_4];
    let pop_title = [pop_title_1,  pop_title_2,  pop_title_3];
    let pop_txt = [pop_txt_1, pop_txt_2, pop_txt_3];
    let x;
    let ch_num;
    let placeholder_item = 1;

    for (placeholder_item of placeholder){
      placeholder_item.addEventListener('click', create_punct);
    }

    punkt1.addEventListener('click', () => {
        let pp = 0;
        create_punct(pp);
    });

    punkt2.addEventListener('click', () => {
      let pp = 1;
      create_punct(pp);
    });

    punkt3.addEventListener('click', () => {
      let pp = 2;
      create_punct(pp);
    });

    punkt4.addEventListener('click', () => {
      let pp = 3;
      create_punct(pp);
    });

    punkt5.addEventListener('click', () => {
      let pp = 4;
      create_punct(pp);
    });

    punkt6.addEventListener('click', () => {
      let pp = 5;
      create_punct(pp);
  });

  punkt7.addEventListener('click', () => {
    let pp = 6;
    create_punct(pp);
  });

  punkt8.addEventListener('click', () => {
    let pp = 7;
    create_punct(pp);
  });

  punkt9.addEventListener('click', () => {
    let pp = 8;
    create_punct(pp);
  });

  punkt10.addEventListener('click', () => {
    let pp = 9;
    create_punct(pp);
  });
  punkt11.addEventListener('click', () => {
    let pp = 10;
    create_punct(pp);
  });

punkt12.addEventListener('click', () => {
  let pp = 11;
  create_punct(pp);
});

punkt13.addEventListener('click', () => {
  let pp = 12;
  create_punct(pp);
});

punkt14.addEventListener('click', () => {
  let pp = 13;
  create_punct(pp);
});

punkt15.addEventListener('click', () => {
  let pp = 14;
  create_punct(pp);
});

punkt16.addEventListener('click', () => {
  let pp = 15;
  create_punct(pp);
});

punkt17.addEventListener('click', () => {
let pp = 16;
create_punct(pp);
});

punkt18.addEventListener('click', () => {
let pp = 17;
create_punct(pp);
});

punkt19.addEventListener('click', () => {
let pp = 18;
create_punct(pp);
});

punkt20.addEventListener('click', () => {
let pp = 19;
create_punct(pp);
});

punkt21.addEventListener('click', () => {
  let pp = 20;
  create_punct(pp);
});

punkt22.addEventListener('click', () => {
let pp = 21;
create_punct(pp);
});

punkt23.addEventListener('click', () => {
let pp = 22;
create_punct(pp);
});

punkt24.addEventListener('click', () => {
let pp = 23;
create_punct(pp);
});

punkt25.addEventListener('click', () => {
let pp = 24;
create_punct(pp);
});
const label = document.querySelector('.label');
const txt_p = document.getElementById('txt_p');
const crt_p = document.getElementById('crt_p');

    function create_punct(item){
      txt_p.focus();
      label.style.borderColor = 'red';
      let name_p = '';

      
      crt_p.addEventListener('click', () => {
        let name_p = document.getElementById('txt_p').value;
        
        if (name_p != ''){
          let npunct = document.createElement('div'); 
          npunct.innerHTML = name_p;
          setColor(npunct);
          npunct.classList.add("item3_2");
          placeholder[item].before(npunct);
          txt_p.value = '';
          item = null;
          label.style.borderColor = 'black';
        }

      }); 
      
    }

    for (const check_item of check){
      check_item.addEventListener('click', check_i);
    }


    function check_i(item1, item2, dd){
      
      let item_c1 = document.querySelectorAll('.d1 .item3_2');
      let item_c2 = document.querySelectorAll('.d2 .item3_2');
      let item_c3 = document.querySelectorAll('.d3 .item3_2');
      let item_c4 = document.querySelectorAll('.d4 .item3_2');
      let item_c5 = document.querySelectorAll('.d5 .item3_2');
      
      if (item_c1[item2] != null && dd == 1){
      check[item1].style.display = 'none';
      item_c1[item2].style.textDecoration = 'line-through';
      item_c1[item2].style.backgroundColor = 'grey';
      item_c1[item2].style.fontFamily = 'cursive';
      item_c1[item2].style.fontSize = '15px';
      item_c1[item2].style.boxShadow = 'none';
      
      }

      if (item_c2[item2] != null && dd == 2){
        check[item1].style.display = 'none';
        item_c2[item2].style.textDecoration = 'line-through';
        item_c2[item2].style.backgroundColor = 'grey';
        item_c2[item2].style.fontFamily = 'cursive';
        item_c2[item2].style.fontSize = '15px';
        item_c2[item2].style.boxShadow = 'none';
        
        }

      if (item_c3[item2] != null && dd == 3){
        check[item1].style.display = 'none';
        item_c3[item2].style.textDecoration = 'line-through';
        item_c3[item2].style.backgroundColor = 'grey';
        item_c3[item2].style.fontFamily = 'cursive';
        item_c3[item2].style.fontSize = '15px';
        item_c3[item2].style.boxShadow = 'none';
        }

        if (item_c4[item2] != null && dd == 4){
          check[item1].style.display = 'none';
          item_c4[item2].style.textDecoration = 'line-through';
          item_c4[item2].style.backgroundColor = 'grey';
          item_c4[item2].style.fontFamily = 'cursive';
          item_c4[item2].style.fontSize = '15px';
          item_c4[item2].style.boxShadow = 'none';
          }

          if (item_c5[item2] != null && dd == 5){
            check[item1].style.display = 'none';
            item_c5[item2].style.textDecoration = 'line-through';
            item_c5[item2].style.backgroundColor = 'grey';
            item_c5[item2].style.fontFamily = 'cursive';
            item_c5[item2].style.fontSize = '15px';
            item_c5[item2].style.boxShadow = 'none';
            }
      
    }
       
    item_1.addEventListener('dragstart', dragstart);
    item_1.addEventListener('dragend', dragend);
    item_1.addEventListener('mouseover', items_f_1);
    item_1.addEventListener('mousedown', items_f_11);
    

    item_2.addEventListener('dragstart', dragstart);
    item_2.addEventListener('dragend', dragend);
    item_2.addEventListener('mouseover', items_f_2);
    item_2.addEventListener('mousedown', items_f_22);

    item_3.addEventListener('dragstart', dragstart);
    item_3.addEventListener('dragend', dragend);
    item_3.addEventListener('mouseover', items_f_3);
    item_3.addEventListener('mousedown', items_f_33);

    item_4.addEventListener('dragstart', dragstart);
    item_4.addEventListener('dragend', dragend);
    item_4.addEventListener('mouseover', items_f_4);
    item_4.addEventListener('mousedown', items_f_44);
    
    function items_f_1(){
      x = 0;
    }

    function items_f_2(){
      x = 1;
    }

    function items_f_3(){
      x = 2;
    }

    function items_f_4(){
      x = 3;
    }

    function items_f_11(){
      setColor(item_1);
    }

    function items_f_22(){
      setColor(item_2);
    }

    function items_f_33(){
      setColor(item_3);
    }

    function items_f_44(){
      setColor(item_4);
    }
    
    function concole(){
        console.log('Понимаю');
    }


    const fin_win = document.querySelector(".fin");
    finbtn.addEventListener('click', fin_active);


    function fin_active(){
      if (reminder.style.display == 'block' || zametki.style.display == 'flex'){
        reminder.style.display = 'none';
        zametki.style.display = 'none';
      }
       fin_win.style.display = 'flex'; 
       fin_win.style.opacity = '1'; 
    }


    function zametki_Active(){
        if (reminder.style.display == 'block' || fin_win.style.display == 'flex'){
            reminder.style.display = 'none';
            fin_win.style.display = 'none'
        }
        zametki.style.display = 'flex';
    }

    zametkibtn.addEventListener("mouseup", zam);
    reminderbtn.addEventListener("mouseup", rem);
    
    
    function zam(event){
        zametki_Active();
    }

    function rem_Active(){
      if (zametki.style.display == 'flex' || fin_win.style.display == 'flex'){
          zametki.style.display = 'none';
          fin_win.style.display = 'none'
      }
      reminder.style.display = 'block';
    }

    function rem(event){
      rem_Active()
    }
    
    
    
    for (const placeholder of placeholders) {
        placeholder.addEventListener('dragover', dragover);
        placeholder.addEventListener('dragenter',dragenter);
        placeholder.addEventListener('dragleave',dragleave);
        placeholder.addEventListener('drop',dragdrop);
    }
    
    

    function dragstart(event) {
        event.target.classList.add('hold');
        setTimeout(() => event.target.classList.add('hide'), 0);
      } 
    
function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() { 
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}



      function dragend(event) {
        if (x == 2){
          event.target.className = 'item3_2';
        }
        else{
          event.target.className = 'item3_2';
        }
        
    }
    
    

    function dragover(event) {
        event.preventDefault();
    }
    function dragenter(event) {
        event.target.classList.add('hovered');
    }
    function dragleave(event) {
        event.target.classList.remove('hovered');
    }
    
    function dragdrop(event) {
        event.target.classList.remove('hovered');
        if(x == 0)
        event.target.append(item_1);

        if(x == 1)
        event.target.append(item_2);

        if(x == 2)
        event.target.append(item_3);

        if(x == 3)
        event.target.append(item_4);
    }


    let clock = document.querySelector('.clock');
    let date_day = document.querySelector('.date')

    function time() {
        let date = new Date();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() :  date.getMinutes();
        clock.innerHTML = `${hours}:${min}`;
    }

    setInterval(time, 500);
    
    function active_date(){
        let today1 = document.querySelector('.dateh1');
        let today2 = document.querySelector('.dateh2');
        let today3 = document.querySelector('.dateh3');
        let today4 = document.querySelector('.dateh4');
        let today5 = document.querySelector('.dateh5');
        let date = new Date();
        let newDate = date.getDate();
        let day = date.getDay();
        let month = date.getMonth();
        

        if (day == 1){
          let d1 = document.querySelector('.dh1');
          let check1 = document.querySelector('.d1 .ch1');
          let check2 = document.querySelector('.d1 .ch2');
          let check3 = document.querySelector('.d1 .ch3');
          let check4 = document.querySelector('.d1 .ch4');
          let check5 = document.querySelector('.d1 .ch5');
          
          
          
          let r = 0;
          check1.addEventListener('click', () => {
            ch_num = 0+r;
            red = 0;
            check_i(ch_num, red, day);
          });
      
          check2.addEventListener('click', () => {
            ch_num = 5+r;
            red = 1; 
            check_i(ch_num, red, day);
          });
      
          check3.addEventListener('click', () => {
            ch_num = 10+r;
            red = 2;
            check_i(ch_num, red, day);
          });
      
          check4.addEventListener('click', () => {
            ch_num = 15+r;
            red = 3;
            check_i(ch_num, red, day);
          });
      
          check5.addEventListener('click', () => {
            ch_num = 20+r;
            red = 4;
            check_i(ch_num, red, day);
          });
      

          d1.style.color = 'red';
          let z = 0;
          let pred_m;
          if(month == 'Feb' && day == 28){
            z = 1;
            pred_m = day;
          }
          

          if(month == 'Apr' && day == 30){
            z = 1;
            pred_m = day;
          }
          

          if(month == 'June' && day == 30){
            z = 1;
            pred_m = day;
          }

          if(month == 'Sept' && day == 30){
            z = 1;
            pred_m = day;
          }
          

          if(month == 'Nov' && day == 30){
            z = 1;
            pred_m = day;
          }
          

          if( day == 31){
            z = 1;
            pred_m = day;
          } 
          
          


          let new_m = month + z;

          switch (new_m, month) {
            case 0:
              month = 'Jan';
              new_m = 'Feb';
              break;
            case 1:
              month = 'Feb';
              new_m = 'Mar';
              break;
            case 2:
              month = 'Mar';
              new_m = 'Apr';
              break;
            case 3:
             month = 'Apr';
             new_m = 'May';
                break;
              case 4:
                month = 'May';
                new_m= 'June';
                break;
              case 5:
                month = 'June';
                new_m = 'July';
                break;
                case 6:
                month = 'July';
                new_m = 'Aug';
              break;
            case 7:
                month = 'Aug';
                new_m = 'Sept';
              break;
            case 8:
                month = 'Sept';
                new_m = 'Oct';
              break;
              case 9:
                month = 'Oct';
                new_m = 'Nov';
              break;
            case 10:
                month = 'Nov';
                new_m = 'Dec';
              break;
            case 11:
                month = 'Dec';
                new_m = 'Jan';
              break;
          }


          today1.innerHTML = `${newDate} ${month}`;
          today2.innerHTML = `${1} ${new_m}`;
          today3.innerHTML = `${2} ${new_m}`;
          today4.innerHTML = `${3} ${new_m}`;
          today5.innerHTML = `${4} ${new_m}`;
        }

        if (day == 2){
          
          let d2 = document.querySelector('.dh2');
          d2.style.color = 'red';

          let check11 = document.querySelector('.d2 .ch1');
          let check2 = document.querySelector('.d2 .ch2');
          let check3 = document.querySelector('.d2 .ch3');
          let check4 = document.querySelector('.d2 .ch4');
          let check5 = document.querySelector('.d2 .ch5');
          
          
          
          let r = 1;
          check11.addEventListener('click', () => {
            ch_num = 0+r;
            red = 0;
            check_i(ch_num, red, day);
          });
      
          check2.addEventListener('click', () => {
            ch_num = 5+r;
            red = 1; 
            check_i(ch_num, red, day);
          });
      
          check3.addEventListener('click', () => {
            ch_num = 10+r;
            red = 2;
            check_i(ch_num, red, day);
          });
      
          check4.addEventListener('click', () => {
            ch_num = 15+r;
            red = 3;
            check_i(ch_num, red, day);
          });
      
          check5.addEventListener('click', () => {
            ch_num = 20+r;
            red = 4;
            check_i(ch_num, red, day);
          });

          let z = 0;
          
          let pred_m;
          if(month == 'Feb' && day == 28){
            z = 1;
            pred_m = 28;
          }
          

          if(month == 'Apr' && day == 30){
            z = 1;
            pred_m = day;
          }
          

          if(month == 'June' && day == 30){
            z = 1;
            pred_m = day;
          }

          if(month == 'Sept' && day == 30){
            z = 1;
            pred_m = day;
          }
          

          if(month == 'Nov' && day == 30){
            z = 1;
            pred_m = day;
          }
          

          if( day == 31){
            z = 1;
            pred_m = day;
          } 
          


          let new_m = month + z;

          switch (new_m, month) {
            case 0:
              month = 'Jan';
              new_m = 'Feb';
              break;
            case 1:
              month = 'Feb';
              new_m = 'Mar';
              break;
            case 2:
              month = 'Mar';
              new_m = 'Apr';
              break;
            case 3:
             month = 'Apr';
             new_m = 'May';
                break;
              case 4:
                month = 'May';
                new_m= 'June';
                break;
              case 5:
                month = 'June';
                new_m = 'July';
                break;
                case 6:
                month = 'July';
                new_m = 'Aug';
              break;
            case 7:
                month = 'Aug';
                new_m = 'Sept';
              break;
            case 8:
                month = 'Sept';
                new_m = 'Oct';
              break;
              case 9:
                month = 'Oct';
                new_m = 'Nov';
              break;
            case 10:
                month = 'Nov';
                new_m = 'Dec';
              break;
            case 11:
                month = 'Dec';
                new_m = 'Jan';
              break;
          }


          today1.innerHTML = `${newDate-1} ${month}`;
          today2.innerHTML = `${newDate} ${month}`;
          today3.innerHTML = `${newDate+1} ${new_m}`;
          today4.innerHTML = `${newDate+2} ${new_m}`;
          today5.innerHTML = `${newDate+3} ${new_m}`;
        }

      
          
        

        if (day == 3){
          
          let d3 = document.querySelector('.dh3');
          d3.style.color = 'red';

          let check1 = document.querySelector('.d3 .ch1');
          let check2 = document.querySelector('.d3 .ch2');
          let check3 = document.querySelector('.d3 .ch3');
          let check4 = document.querySelector('.d3 .ch4');
          let check5 = document.querySelector('.d3 .ch5');
          
          
          
          let r = 2;
          check1.addEventListener('click', () => {
            ch_num = 0+r;
            red = 0;
            check_i(ch_num, red, day);
          });
      
          check2.addEventListener('click', () => {
            ch_num = 5+r;
            red = 1; 
            check_i(ch_num, red, day);
          });
      
          check3.addEventListener('click', () => {
            ch_num = 10+r;
            red = 2;
            check_i(ch_num, red, day);
          });
      
          check4.addEventListener('click', () => {
            ch_num = 15+r;
            red = 3;
            check_i(ch_num, red, day);
          });
      
          check5.addEventListener('click', () => {
            ch_num = 20+r;
            red = 4;
            check_i(ch_num, red, day);
          });

          let z = 0;
          
          if(month == 'Feb' && day == 28)
          z = 1;

          if(month == 'Apr' && day == 30)
          z = 1;

          if(month == 'June' && day == 30)
          z = 1;

          if(month == 'Sept' && day == 30)
          z = 1;

          if(month == 'Nov' && day == 30)
          z = 1;

          if( day == 31) 
          z = 1;
          


          let new_m = month + z;

          switch (new_m, month) {
            case 0:
              month = 'Jan';
              new_m = 'Feb';
              break;
            case 1:
              month = 'Feb';
              new_m = 'Mar';
              break;
            case 2:
              month = 'Mar';
              new_m = 'Apr';
              break;
            case 3:
             month = 'Apr';
             new_m = 'May';
                break;
              case 4:
                month = 'May';
                new_m= 'June';
                break;
              case 5:
                month = 'June';
                new_m = 'July';
                break;
                case 6:
                month = 'July';
                new_m = 'Aug';
              break;
            case 7:
                month = 'Aug';
                new_m = 'Sept';
              break;
            case 8:
                month = 'Sept';
                new_m = 'Oct';
              break;
              case 9:
                month = 'Oct';
                new_m = 'Nov';
              break;
            case 10:
                month = 'Nov';
                new_m = 'Dec';
              break;
            case 11:
                month = 'Dec';
                new_m = 'Jan';
              break;
          }


          today1.innerHTML = `${newDate-2} ${month}`;
          today2.innerHTML = `${newDate-1} ${month}`;
          today3.innerHTML = `${newDate} ${month}`;
          today4.innerHTML = `${newDate+1} ${new_m}`;
          today5.innerHTML = `${newDate+2} ${new_m}`;
        }
        

        if (day == 4){
          
          let d4 = document.querySelector('.dh4');
          d4.style.color = 'red';

          let check1 = document.querySelector('.d4 .ch1');
          let check2 = document.querySelector('.d4 .ch2');
          let check3 = document.querySelector('.d4 .ch3');
          let check4 = document.querySelector('.d4 .ch4');
          let check5 = document.querySelector('.d4 .ch5');
          
          
          
          let r = 3;
          check1.addEventListener('click', () => {
            ch_num = 0+r;
            red = 0;
            check_i(ch_num, red, day);
          });
      
          check2.addEventListener('click', () => {
            ch_num = 5+r;
            red = 1; 
            check_i(ch_num, red, day);
          });
      
          check3.addEventListener('click', () => {
            ch_num = 10+r;
            red = 2;
            check_i(ch_num, red, day);
          });
      
          check4.addEventListener('click', () => {
            ch_num = 15+r;
            red = 3;
            check_i(ch_num, red, day);
          });
      
          check5.addEventListener('click', () => {
            ch_num = 20+r;
            red = 4;
            check_i(ch_num, red, day);
          });

          let z = 0;
          
          if(month == 'Feb' && day == 28)
          z = 1;

          if(month == 'Apr' && day == 30)
          z = 1;

          if(month == 'June' && day == 30)
          z = 1;

          if(month == 'Sept' && day == 30)
          z = 1;

          if(month == 'Nov' && day == 30)
          z = 1;

          if( day == 31) 
          z = 1;
          


          let new_m = month + z;

          switch (new_m, month) {
            case 0:
              month = 'Jan';
              new_m = 'Feb';
              break;
            case 1:
              month = 'Feb';
              new_m = 'Mar';
              break;
            case 2:
              month = 'Mar';
              new_m = 'Apr';
              break;
            case 3:
             month = 'Apr';
             new_m = 'May';
                break;
              case 4:
                month = 'May';
                new_m= 'June';
                break;
              case 5:
                month = 'June';
                new_m = 'July';
                break;
                case 6:
                month = 'July';
                new_m = 'Aug';
              break;
            case 7:
                month = 'Aug';
                new_m = 'Sept';
              break;
            case 8:
                month = 'Sept';
                new_m = 'Oct';
              break;
              case 9:
                month = 'Oct';
                new_m = 'Nov';
              break;
            case 10:
                month = 'Nov';
                new_m = 'Dec';
              break;
            case 11:
                month = 'Dec';
                new_m = 'Jan';
              break;
          }


          today1.innerHTML = `${newDate-3} ${month}`;
          today2.innerHTML = `${newDate-2} ${month}`;
          today3.innerHTML = `${newDate-1} ${month}`;
          today4.innerHTML = `${newDate} ${month}`;
          today5.innerHTML = `${newDate+1} ${new_m}`;
        }

        if (day == 5){
          
          let d5 = document.querySelector('.dh5');
          d5.style.color = 'red';

          let check1 = document.querySelector('.d5 .ch1');
          let check2 = document.querySelector('.d5 .ch2');
          let check3 = document.querySelector('.d5 .ch3');
          let check4 = document.querySelector('.d5 .ch4');
          let check5 = document.querySelector('.d5 .ch5');
          
          
          
          let r = 4;
          check1.addEventListener('click', () => {
            ch_num = 0+r;
            red = 0;
            check_i(ch_num, red, day);
          });
      
          check2.addEventListener('click', () => {
            ch_num = 5+r;
            red = 1; 
            check_i(ch_num, red, day);
          });
      
          check3.addEventListener('click', () => {
            ch_num = 10+r;
            red = 2;
            check_i(ch_num, red, day);
          });
      
          check4.addEventListener('click', () => {
            ch_num = 15+r;
            red = 3;
            check_i(ch_num, red, day);
          });
      
          check5.addEventListener('click', () => {
            ch_num = 20+r;
            red = 4;
            check_i(ch_num, red, day);
          });

          let z = 0;
          
          if(month == 'Feb' && day == 28)
          z = 1;

          if(month == 'Apr' && day == 30)
          z = 1;

          if(month == 'June' && day == 30)
          z = 1;

          if(month == 'Sept' && day == 30)
          z = 1;

          if(month == 'Nov' && day == 30)
          z = 1;

          if( day == 31) 
          z = 1;
          


          let new_m = month + z;

          switch (new_m, month) {
            case 0:
              month = 'Jan';
              new_m = 'Feb';
              break;
            case 1:
              month = 'Feb';
              new_m = 'Mar';
              break;
            case 2:
              month = 'Mar';
              new_m = 'Apr';
              break;
            case 3:
             month = 'Apr';
             new_m = 'May';
                break;
              case 4:
                month = 'May';
                new_m= 'June';
                break;
              case 5:
                month = 'June';
                new_m = 'July';
                break;
                case 6:
                month = 'July';
                new_m = 'Aug';
              break;
            case 7:
                month = 'Aug';
                new_m = 'Sept';
              break;
            case 8:
                month = 'Sept';
                new_m = 'Oct';
              break;
              case 9:
                month = 'Oct';
                new_m = 'Nov';
              break;
            case 10:
                month = 'Nov';
                new_m = 'Dec';
              break;
            case 11:
                month = 'Dec';
                new_m = 'Jan';
              break;
          }


          today1.innerHTML = `${newDate-4} ${month}`;
          today2.innerHTML = `${newDate-3} ${month}`;
          today3.innerHTML = `${newDate-2} ${month}`;
          today4.innerHTML = `${newDate-1} ${month}`;
          today5.innerHTML = `${newDate} ${month}`;

        }
    }
     setInterval(active_date, 500);



    function date() {
        
        let date = new Date();
        let newDate = date.getDate();
        let day = date.getDay();
        let month = date.getMonth();
        let years = date.getFullYear();
        switch (month) {
            case 0:
              month = 'Jan';
              break;
            case 1:
              month = 'Feb';
              break;
            case 2:
              month = 'Mar';
              break;
            case 3:
             month = 'Apr';
                break;
              case 4:
                month = 'May';
                break;
              case 5:
                month = 'June';
                break;
                case 6:
                month = 'July';
              break;
            case 7:
                month = 'Aug';
              break;
            case 8:
                month = 'Sept';
              break;
              case 9:
                month = 'Oct';
              break;
            case 10:
                month = 'Nov';
              break;
            case 11:
                month = 'Dec';
              break;
          }
        date_day.innerHTML = `${newDate} ${month} ${years}`;
        
    }
    
    setInterval(date, 500);
   
   
const rembtn = document.querySelector('.crtrem');
const setListener = (element, type, handler) => {
   if (!element) {
     return;     
  }
  element.addEventListener(type, handler);
  return () => {
     element.removeEventListener(type, handler);
   };
  }
   
let millisecond;

setListener(rembtn, 'click', millis);

function millis(){
  const timerem = document.querySelector('.time-area').value;
   console.log(timerem);
   let time_parts = timerem.split(":");
   millisecond = time_parts[0] * (60000 * 60) + (time_parts[1] * 60000); 
   console.log(millisecond);
}



function push (){
  const text_rem = document.getElementById('text-rem').value;
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let pushrem = (hours*60 + min) * 60000;
  if (millisecond == pushrem){
    alert(text_rem);
    pushrem = 0;
    
  }

}
setInterval(push, 500); 


zam_crt_btn.addEventListener('click', crtz_btn);

function crtz_btn() {
  zametki_title = document.getElementById("crt-zametki-title").value;
  zametki_content = document.getElementById('crt-zametki-content').value;
  
  zametka();
}

let arr_zametki_title = [];
let arr_zametki_content = [];
let n = 0;
let m = 0;

function zametka(){
  if(zametki_title != 0 && zametki_content != 0){
    const zametka_item = document.createElement('div');
    zametka_item.classList.add('zametka-item')
    const zam_title = document.createElement('div');
    zam_title.classList.add('zametki-title');
    zametka_item.addEventListener('click', show_zam);

    ztitle.after(zametka_item);
    zametka_item.prepend(zam_title);

    document.querySelector('.title-zametka').value='';
    document.querySelector('.title-zametka').value='';

    zam_title.innerHTML = zametki_title;
    win_zam_title.innerHTML = zametki_title;
    win_zam_content.innerHTML = zametki_content;

    arr_zametki_title [n] = zametki_title;
    arr_zametki_content [n] = zametki_content;
    
    
    actual_t[m].innerHTML = arr_zametki_title[n];
    actual_c[m].innerHTML = arr_zametki_content[n];
    
    pop_title[m].innerHTML = arr_zametki_title[n]
    pop_txt[m].innerHTML = arr_zametki_content[n];


    if (m == 2){
      m = -1;
    }
    n++;
    m++;
  } 
  

  zametki_title = 0;
  zametki_content = 0;
  document.getElementById('crt-zametki-title').value='';
  document.getElementById('crt-zametki-content').value='';
  

}

plus.addEventListener('click', win_zam);

function win_zam(){
  if(read_zam.style.display == "block"){
    read_zam.style.display = "none";
  }
  crt_zam.style.display = "block";
}

function show_zam() {
  if(crt_zam.style.display == "block" || read_zam.style.display == "block"){
    crt_zam.style.display = "none"
    read_zam.style.display = "none"
  }
  
  read_zam.style.display = "block";
}

function Calendar2(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate(),
      D = new Date(year,month,Dlast),
      DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
      DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
      calendar = '<tr>',
      month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
  }else{
    for(var  i = 0; i < 6; i++) calendar += '<td>';
  }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar += '<td class="today">' + i;
    }else{
      calendar += '<td>' + i;
    }
    if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr>';
    }
  }
  for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
  document.querySelector('#'+id+' tbody').innerHTML = calendar;
  document.querySelector('#'+id+' thead td:nth-child(2)').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.month = D.getMonth();
  document.querySelector('#'+id+' thead td:nth-child(2)').dataset.year = D.getFullYear();
  if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
      document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
  }
  }
  Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
  
  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)-1);
  }

  document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function() {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month)+1);
  }


  
  const btn_reg = document.getElementById('btn_reg');
  const name_reg = document.querySelector('.name');
  const dolg = document.querySelector('.dolg');
  const organ = document.querySelector('.org');
  const user = document.querySelector(".img");
  const pol_1 = document.getElementById('pol_1');
  const pol_2 = document.getElementById('pol_2');
  const user_img = document.querySelector('.user');
  const prof = document.querySelector(".imagine");

  btn_reg.addEventListener('click', create_user);

  function create_user(){
    const user_name = document.getElementById('name_reg').value;
    const user_sname = document.getElementById('second_name_reg').value;
    const org = document.getElementById('org').value;
    const dolgn = document.getElementById('dolg').value;
    

    if (pol_1.checked == true){
      pol_1.checked = false;
      let img = document.createElement("img");
      img.src = "user.jpg";
      img.style.width = "50px";
      img.style.height = "50px";
      prof.appendChild(img);
    }
    else if (pol_2.checked == true){
      pol_2.checked = false;
      let img = document.createElement("img");
      img.src = "user_2.jpg";
      img.style.width = "50px";
      img.style.height = "50px";
      prof.appendChild(img);
    }

    name_reg.innerHTML = 'Вы:' + user_sname + ' ' +  user_name;
    dolg.innerHTML = 'Должность:' + dolgn;
    organ.innerHTML = 'Организация:' + org;
    const br = document.querySelector('.r');

    br.style.display = 'none';

  }
  
  const btn_fin_c1 = document.querySelector(".btn_fin_c_1");
  const btn_fin_c2 = document.querySelector(".btn_fin_c_2");
  const btn_fin_c3 = document.querySelector(".btn_fin_c_3");
  const btn_fin_c4 = document.querySelector(".btn_fin_c_4");
  const punct_ch = [btn_fin_c1, btn_fin_c2, btn_fin_c3, btn_fin_c4];
  const num = document.getElementById('fin_value');
  const fin_btn = document.getElementById("fin_btn");
  const all_money = document.querySelector(".all_money_value");

  fin_btn.addEventListener("click", plus_m);

  let s = 0, y = 0, z = 0, v = 0, all = 0;

  function plus_m(){
    
    if(punct_ch[0].style.borderColor == "green"){
      s += parseInt(document.getElementById('fin_value').value, 10);
      all += s;  
    }

    if(punct_ch[1].style.borderColor == "green"){
      y += parseInt(document.getElementById('fin_value').value, 10);
      all += y;
    }

    if(punct_ch[2].style.borderColor == "green"){
      z += parseInt(document.getElementById('fin_value').value, 10);
      all += z;
    }

    if(punct_ch[3].style.borderColor == "green"){
      v += parseInt(document.getElementById('fin_value').value, 10);
      all += v;
    }
    
   
   num.value = "";
   
   all_money.innerHTML = all;

    google.load("visualization", "1", {packages:["corechart"]});
   google.setOnLoadCallback(drawChart);
   function drawChart() {
    
    var data = google.visualization.arrayToDataTable([
     ['Основные', 'Объём'],
     ['Основные', s],
     ['Досуг', y],
     ['Инвестиции', z],
     ['Прочее',v]
    ]);
    var options = {
     title: 'Бюджет',
     is3D: true,
     pieResidueSliceLabel: ''
    };
    var chart = new google.visualization.PieChart(document.getElementById('budg'));
     chart.draw(data, options);
   }


  }


  btn_fin_c1.addEventListener("click", punct_1);
  btn_fin_c2.addEventListener("click", punct_2);
  btn_fin_c3.addEventListener("click", punct_3);
  btn_fin_c4.addEventListener("click", punct_4);
  
  let variabl;

  function punct_1(){
    variabl = 0;
    
    if(punct_ch[1].style.borderColor == "green"){
      punct_ch[1].style.boxShadow = "none";
      punct_ch[1].style.borderColor = "#757575";
    }

    if(punct_ch[2].style.borderColor == "green"){
      punct_ch[2].style.boxShadow = "none";
      punct_ch[2].style.borderColor = "#757575";
    }

    if(punct_ch[3].style.borderColor == "green"){
      punct_ch[3].style.boxShadow = "none";
      punct_ch[3].style.borderColor = "#757575";
    }

    punct_ch[variabl].style.borderColor = "green";
    punct_ch[variabl].style.boxShadow = "0 0 3px green, 0 0 15px green";
  }

  function punct_2(){
    variabl = 1;

    if(punct_ch[0].style.borderColor == "green"){
      punct_ch[0].style.boxShadow = "none";
      punct_ch[0].style.borderColor = "#757575";
    }

    if(punct_ch[2].style.borderColor == "green"){
      punct_ch[2].style.boxShadow = "none";
      punct_ch[2].style.borderColor = "#757575";
    }

    if(punct_ch[3].style.borderColor == "green"){
      punct_ch[3].style.boxShadow = "none";
      punct_ch[3].style.borderColor = "#757575";
    }

    punct_ch[variabl].style.borderColor = "green";
    punct_ch[variabl].style.boxShadow = "0 0 3px green, 0 0 15px green";
  }

  function punct_3(){
    variabl = 2;

    if(punct_ch[1].style.borderColor == "green"){
      punct_ch[1].style.boxShadow = "none";
      punct_ch[1].style.borderColor = "#757575";
    }

    if(punct_ch[0].style.borderColor == "green"){
      punct_ch[0].style.boxShadow = "none";
      punct_ch[0].style.borderColor = "#757575";
    }

    if(punct_ch[3].style.borderColor == "green"){
      punct_ch[3].style.boxShadow = "none";
      punct_ch[3].style.borderColor = "#757575";
    }


    punct_ch[variabl].style.borderColor = "green";
    punct_ch[variabl].style.boxShadow = "0 0 3px green, 0 0 15px green";
  }

  function punct_4(){
    variabl = 3;
    
    if(punct_ch[1].style.borderColor == "green"){
      punct_ch[1].style.borderColor = "none";
      punct_ch[1].style.borderColor = "#757575";
    }

    if(punct_ch[2].style.borderColor == "green"){
      punct_ch[2].style.borderColor = "none";
      punct_ch[2].style.borderColor = "#757575";
    }

    if(punct_ch[0].style.borderColor == "green"){
      punct_ch[0].style.borderColor = "none";
      punct_ch[0].style.borderColor = "#757575";
    }

    punct_ch[variabl].style.borderColor = "green";
    punct_ch[variabl].style.boxShadow = "0 0 3px green, 0 0 15px green";
  }



  




  