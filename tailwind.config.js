/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class' ,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      colors : {
        primary : "#71C4E4" ,
        secondary : "#DE4D90",
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
        "ellipse-primary" : ['0px -5px 5px #71C4E4' ,'0px 5px 5px #71C4E4', '5px 0px 5px #71C4E4' ,'-5px 0px 5px #71C4E4'],
        "ellipse-secondary" : ['0px -5px 5px #DE4D90' ,'0px 5px 5px #DE4D90', '5px 0px 5px #DE4D90' ,'-5px 0px 5px #DE4D90'] ,
         competence : ['0px 5px 4px #DE4D90' ,'5px 0px 4px #DE4D90', '0px -5px 4px #71C4E4' ,'-5px 0px 4px #71C4E4']
        
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
            borderColor : '#71C4E4'
          } ,
          '33%' : {
            borderColor : '#DE4D90'
          } ,
          '66%' : {
            borderColor : '#3E2E69'
          }
           ,
          '100%' : {
            borderColor : "#71C4E4"
          }
        } , 
        'competence-content' : {
         '0%,100%' : {
          'border-color': '#71C4E4 #DE4D90 #DE4D90  #71C4E4 '  ,
          'box-shadow' : '0px 5px 4px #DE4D90 , 4px 0px 5px #DE4D90 , 0px -5px 4px #71C4E4 , -5px 0px 4px #71C4E4'
          
         } ,
         '50%' : {
          'border-color': '#DE4D90 #71C4E4 #71C4E4  #DE4D90 ' ,
          'box-shadow' : '0px 5px 4px #71C4E4 , 5px 0px 4px #71C4E4 , 0px -5px 4px  #DE4D90, -5px 0px 4px #DE4D90'
          
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
