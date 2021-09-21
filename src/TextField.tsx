import React from 'react';

//interface
interface Props {
	text: String;
	parvo: String;

}
const TextField: React.FC<Props> = ({
	text,
	parvo
}) => {
	
	return (
	  <div>
		  <h1>{text}</h1>
		  <p>{parvo}</p>
	     <input placeholder="konichiwa" />
	    
	  </div>
	);
};


export default TextField;