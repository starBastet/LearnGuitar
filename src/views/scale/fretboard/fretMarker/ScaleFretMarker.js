import React, {Component} from 'react';
import './ScaleFretMarker.css';


class ScaleFretMarker extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			fretNum:this.props.fretNum
		};
		
		this.container = null;
		
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
			<div className={'scaleFretMarkerContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ScaleFretMarker;