/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#BD8CD3" ,
        secondary : "#FCE5B9",
        muted : "#7F7474",
        silver : "#FFDF00" ,
        purpel : "#3E2E69" , 
        ciel : "#D6F3FB" , 
        formation : "#73A1FB" ,
        via : "#E2C0C4" , 
        linkedin : "#0077B7" ,
        facebook : "#1976D2" , 
        email : "#F44336" , 
        github : "#384949" , 
        whatsapp : "#48C858"

        

      },
      fontFamily : {
        poppins : 'Poppins',
        k2d : 'K2D' ,
        arabic : 'Gulzar'
      } ,
      boxShadow : {
        home : '50px 80px ' ,
        "y-4" : '0px 50px 5px' ,
        "ellipse-primary" : ['0px -5px 5px #BD8CD3' ,'0px 5px 5px #BD8CD3', '5px 0px 5px #BD8CD3' ,'-5px 0px 5px #BD8CD3'],
        "ellipse-secondary" : ['0px -5px 5px #FCE5B9' ,'0px 5px 5px #FCE5B9', '5px 0px 5px #FCE5B9' ,'-5px 0px 5px #FCE5B9'] ,
         competence : ['0px 5px 4px #FCE5B9' ,'5px 0px 4px #FCE5B9', '0px -5px 4px #BD8CD3' ,'-5px 0px 4px #BD8CD3']
        
      } ,
      rotate : {
        "04" : "-40deg" , 
        "40" : "40deg" ,
        
      } ,

      /* Animation */
      keyframes: {
        tailwind : {
          '0%' : {
            left : "64px" ,
            bottom : "112px" ,
          } ,
          '33.33%': { 
          
            left : "80px" ,
            bottom : "64px" , 
           
           },
          '66.66%': { 
            
            left : "40px"  , 
            bottom : "64px" , 
            
            
           }, 
           '100%' : {
            right : "144px" ,
            bottom : "112px" ,
          } 
        } ,
        javascript: {
          '0%' : {
            left : "80px" ,
            bottom : "64px" ,
          } , 
          '33.33%': { 
            left : "40px"  , 
            bottom : "64px" , 
            
           },
          '66.66%': { 
            right : "144px" ,
            bottom : "112px" ,
            
           },
           '100%' : {
            left : "80px" ,
            bottom : "64px" ,
          } ,
        } , 
   
        react : {
          '0%' : {
            left : "40px"  , 
            bottom : "64px" , 
            
          } ,
          '33.33%': { 
            right : "144px" ,
            bottom : "112px" ,
          
          }, 
          '66.66%' : {
            left : "80px" ,
            bottom : "64px" , 
         
          } ,
          
         '100%': { 
          left : "40px"  , 
          bottom : "64px" , 
          },
         
        
        
        } ,
        
        mysql : {
          '0%' : {
            left : "16rem" , 
            bottom : "7rem"
          } , 
          '33.33%' : {
            left : "18rem" , 
            bottom : '4rem'
          } , 
          '66.66%' : {
            left : "15rem" , 
            bottom : '4rem'
          } , 
          '100%' : {
            left : "16rem" , 
            bottom : "7rem"
          }
         
        } , 
        laravel : {
          '0%' : {
            left : "18rem" , 
            bottom : '4rem'
          } , 
          '33.33%' : {
            left : "15rem" , 
            bottom : '4rem'
          } , 
          '66.66%' : {
            left : "16rem" , 
            bottom : "7rem"
          } , 
          '100%' : {
            left : "18rem" , 
            bottom : '4rem'
          }
        } , 
        php : {
          '0%' : {
             left : "15rem" , 
            bottom : '4rem'
          } , 
          '33.33%' : {
            left : "16rem" , 
            bottom : "7rem"
           
          } , 
          '66.66%' : {
            left : "18rem" , 
            bottom : '4rem'
            
          } , 
          '100%' : {
            left : "15rem" , 
            bottom : '4rem'
          }
        } ,
        stage : {
          '0%' : {
            left: '0px',
          },
            '50%' : {
              left: '80px',
            }  ,
            "100%" :  {
              left: '0px',
            }
        } ,
        competence : {
          '0%' : {
            borderColor : '#BD8CD3'
          } ,
          '33%' : {
            borderColor : '#FCE5B9'
          } ,
          '66%' : {
            borderColor : '#3E2E69'
          }
           ,
          '100%' : {
            borderColor : "#BD8CD3"
          }
        } , 
        'competence-content' : {
         '0%,100%' : {
          'border-color': '#BD8CD3 #FCE5B9 #FCE5B9  #BD8CD3 '  ,
          'box-shadow' : '0px 5px 4px #FCE5B9 , 4px 0px 5px #FCE5B9 , 0px -5px 4px #BD8CD3 , -5px 0px 4px #BD8CD3'
          
         } ,
         '50%' : {
          'border-color': '#FCE5B9 #BD8CD3 #BD8CD3  #FCE5B9 ' ,
          'box-shadow' : '0px 5px 4px #BD8CD3 , 5px 0px 4px #BD8CD3 , 0px -5px 4px  #FCE5B9, -5px 0px 4px #FCE5B9'
          
         }
        }
        ,
        contact : {
          '0%' : {
            transform : 'rotate(0deg)'
            
          } ,
          '25%' : {
            transform : 'rotate(11deg)'
          } , 
          '50%' : {
            transform : 'rotate(0deg)'
          } , 
          '75%' : {
            transform : 'rotate(-11deg)'
          } , 
         '100%':  {
          transform : 'rotate(0deg)'
          }
         
        } ,
        graduation : {
         
          to : {
            transform : 'rotateY(360deg)'
          }
          
        }
      } ,
      animation: {
        javascript: 'javascript 3s linear infinite',
        tailwind : 'tailwind 3s linear infinite',
        react : "react 3s linear infinite" , 
        mysql : "mysql 3s linear infinite" , 
        laravel : "laravel 3s linear infinite" , 
        php : "php 3s linear infinite" ,
        stage : "stage 2s linear infinite" ,
        competence : 'competence 2s linear infinite' ,
        contact : 'contact 2s linear infinite' , 
        graduation : 'graduation 5s cubic-bezier(0.65, 0.05, 0.36, 1) 1s infinite',
        'competence-content' : 'competence-content 3s cubic-bezier(0.65, 0.05, 0.36, 1)  infinite'
      }
    }, 
  },
  plugins: [],
}
