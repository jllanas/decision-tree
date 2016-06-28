var decision = prompt('How hungry are you? Are you Not very, STARVED, or Not at all? ');

switch(decision) {
  case 'Not very':
    var money = prompt('Do you have money to spend?');
    if(money === 'yes'){
      alert('Get some Elote ')
    } else if(money === 'no'){
      alert('Eat whatever you find at home.')
    }; break;

  case 'STARVED':
    var healthy = prompt('Do you want to eat healthy?');
    if(healthy === 'yes'){
      var money = prompt('Do you have money to spend?');
      if(money === 'yes'){
        alert('Go to 100% Natural.')
      } else if(money === 'no'){
        alert('Eat chicken and vegetables.')
      }
    } else if(healthy === 'no'){
      var money = prompt('Do you have money to spend?');
      if(money = 'yes'){
        alert('YAS! WINGSTOP!');
      } else if(money = 'no'){
        alert('Make some ramen.')
      };

    }; break;

  case 'Not at all':
    alert('Then dont eat');

};
