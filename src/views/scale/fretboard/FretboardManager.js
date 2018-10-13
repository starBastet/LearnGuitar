import React, {Component} from 'react';
import './FretboardManager.css';
import ScaleDotManager from './dots/ScaleDotManager';
import ScaleFretMarker from './fretMarker/ScaleFretMarker';


class FretboardManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			scaleDataA:this.props.scaleDataA,
			fretNum:this.props.fretNum
		};
		
		this.fretW = this.props.fretW;
		this.stringDist = this.props.stringDist;
		
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
		var i;
		
		var fretsA = [];
		for (i=0;i<4;i++)
		{
			var fretJsx = <div 
							className={'scaleFret'}
							key={'scaleFret'+i}
						  >
						  	
						  </div>;
			
			fretsA.push(fretJsx);
		}
		
		var stringsA = [];
		for (i=0;i<6;i++)
		{
			var Y = (this.stringDist * i);
			
			var stringJsx = <div 
							className={'scaleString'}
							style={{top:Y+'px'}}
							key={'scaleString'+i}
						   >
						  	
						   </div>;
			
			stringsA.push(stringJsx);
		}
		
		
		var jsx = <div>
					{fretsA}
					{stringsA}
					<ScaleDotManager
						scaleDataA={this.state.scaleDataA}
						fretW={this.fretW}
						stringDist={this.stringDist}
					/>
					<ScaleFretMarker
						fretNum={this.state.fretNum}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'fretboardManagerContainer'}>
				{jsx}
			</div>
		);
	}
}

export default FretboardManager;