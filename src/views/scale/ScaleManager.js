import React, {Component} from 'react';
import './ScaleManager.css';
import FretboardManager from './fretboard/FretboardManager';


class ScaleManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			scaleDataA:this.props.scaleDataA,
			fretNum:this.props.fretNum
		};
		
		this.fretW = 50;
		this.stringDist = 30;
		
		//this.scaleDataA = this.props.scaleDataA;
		
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
		if (newProps.scaleDataA !== this.state.scaleDataA)
		{
			this.setState(
			{
				scaleDataA:newProps.scaleDataA,
				fretNum:newProps.fretNum
			});
		}
	}
	
	compileJsx()
	{
		var jsx = <div>
					<FretboardManager
						scaleDataA={this.state.scaleDataA}
						fretNum={this.state.fretNum}
						fretW={this.fretW}
						stringDist={this.stringDist}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'scaleManagerContainer'}>
				{jsx}
			</div>
		);
	}
}

export default ScaleManager;