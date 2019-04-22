export var settings = {
    columns: {  
        Request: {  
          title: 'Request',  
          filter: true,  
        },  
        Asset_type: {  
          title: 'Asset_type',  
          filter: true,  
        }, 
        Quantity: {  
            title: 'Quantity',  
            filter: true,  
          }, 
        Unitary_Price: {  
          title: 'Unitary_Price',  
          filter: true,  
        },
        Begin_time_slot :{
          title: 'Begin_time_slot',  
          filter: true,
        } ,
        End_time_slot :{
            title: 'End_time_slot',  
            filter: true,
          }, 
          Publication_Time :{
            title: 'Publication_Time',  
            filter: true,
          } ,
          Expiration_Time :{
            title: 'Expiration_Time',  
            filter: true,
          } ,
          Consumer :{
            title: ' Consumer',  
            filter: true,
          } ,
      },  
      pager: {  
        display: true,  
        perPage: 10  
      },  
      actions: {  
        columnTitle: 'Action',  
        add: true,  
        edit: true,  
        delete: true,  
        position: 'left'  
      },  
      attr: {  
        class: 'table table-striped table-bordered table-hover'  
      },  
      defaultStyle: true  
    }; 