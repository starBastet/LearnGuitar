import React, {Component} from 'react';
import './ChordDiagramFingerItem.css';


class ChordDiagramFingerItem extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			string:this.props.string
		};
		
		this.cellSide = this.props.cellSide;
		this.X = this.props.X;
		
		this.container = null;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		this.container.style.fontSize = (this.cellSide * .0451) + 'em';
	}
	
	componentWillReceiveProps(newProps)
	{
		if (newProps.string !== this.state.string)
		{
			this.setState(
			{
				string:newProps.string
			});
		}
	}
	
	compileJsx()
	{
		var jsx = <div 
					className={'chordDiagramFingerItem'} 
					style={{left:(this.X-6)+'px'}}
				  >
					{this.state.string}
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordDiagramFingerItemContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordDiagramFingerItem;