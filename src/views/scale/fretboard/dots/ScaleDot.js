import React, {Component} from 'react';
import './ScaleDot.css';


class ScaleDot extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			coordsA:this.props.coordsA
		};
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.coordsA !== this.state.coordsA)
		{
			this.setState(
			{
				coordsA:newProps.coordsA
			});
		}
	}
	
	compileJsx()
	{
		var W = this.state.coordsA.W;
		var X = this.state.coordsA.X - (W*.5);
		var Y = this.state.coordsA.Y - (W*.5);
		
		var jsx = <div 
					className={'scaleDot'}
					style={{left:X+'px',top:Y+'px',width:W+'px',height:W+'px'}}
				  >
					
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'scaleDotContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ScaleDot;