import React, {Component} from 'react';
import './ScaleDotManager.css';
import ScaleDot from './ScaleDot';


class ScaleDotManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			scaleDataA:this.props.scaleDataA
		};
		
		this.fretW = this.props.fretW;
		this.stringDist = this.props.stringDist;
		
		this.container = null;
		this.timeout = null;
		
		this.show = this.show.bind(this);
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
			this.container.style.opacity = 0;
			this.timeout = setTimeout(this.show,205,newProps.scaleDataA);
		}
	}
	
	show(scaleDataA)
	{
		this.timeout = null;
		this.container.style.opacity = 1;
		this.setState(
		{
			scaleDataA:scaleDataA
		});
	}
	
	compileJsx()
	{
		var scaleDataA = this.state.scaleDataA;
		
		var jsxA = [];
		
		for (var i=0;i<scaleDataA.length;i++)
		{
			for (var j=0;j<scaleDataA[i].length;j++)
			{
				var W = 20;
				var X = (Number(scaleDataA[i][j]) * this.fretW) + (this.fretW * .5);
				var Y = i * this.stringDist;
				var coordsA = {X:X,Y:Y,W:W};
				var jsxP = <ScaleDot
							coordsA={coordsA}
							key={i+'scaleDot'+j}
						  />;
						  
				jsxA.push(jsxP);
			}
		}
		
		var jsx = <div>
					{jsxA}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'scaleDotManagerContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ScaleDotManager;