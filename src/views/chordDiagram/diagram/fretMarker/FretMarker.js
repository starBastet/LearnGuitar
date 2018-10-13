import React, {Component} from 'react';
import './FretMarker.css';


class FretMarker extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			fretNum:this.props.fretNum
		};
		
		this.cellSide = this.props.cellSide;
		
		this.container = null;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		this.container.style.fontSize = (this.cellSide * .0451) + 'em';
		this.container.style.left = (this.cellSide * -.8) + 'px';
		this.container.style.top = (this.cellSide * .21) + 'px';
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.fretNum !== this.state.fretNum)
		{
			this.setState(
			{
				fretNum:newProps.fretNum
			});
		}
	}
	
	compileJsx()
	{
		var jsx = <div>
					{this.state.fretNum}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'fretMarkerContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default FretMarker;