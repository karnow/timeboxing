import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';



function ProgressBar({ className = "", percent=33, big=false,  color=null}) {

        let progresClasName = classNames(
            "progress",
            className,
            {
            "progress--big": big,
            "progress--color-red":color === "red",
            "progress--color-blue":color === "blue",
            "progress--color-green":color === "green"
            }
        )

        function validRange (props, propName, componentName){

            if(props[propName] >100 || props[propName] <0) {
                return new Error(`Invalid prop ${propName} issued to component ${componentName}. the valid range is from 0 to 100` )
            }
        }

        function defaultColor  (props, propName, componentName){

            if(props[propName] !=="red" || props[propName] !=="green" || props[propName] !=="blue") {
                return new Error(`Invalid prop ${propName} issued to component ${componentName}. the color should be red, blue or green` )
            }
        }
        
        ProgressBar.propTypes= {
            big: PropTypes.bool,
            percent: PropTypes.number, 
            percent: PropTypes.any, 
            percent: validRange,
            color: defaultColor
            
        }

    

        
            return (
                <div className={progresClasName}>
                    <div className="progress__bar" style={{width: `${percent}%`}}></div>
                </div>
            );
        }
        
        export default ProgressBar;

    
        
 
    