import React, {Component} from 'react';
import './ChordDiagramChordLabel.css';


class ChordDiagramChordLabel extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			chordLabel:this.props.chordLabel
		};
		
		this.cellSide = this.props.cellSide;
		
		this.timeout = null;
		this.container = null;
		
		this.show = this.show.bind(this);
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
		if (newProps.chordLabel !== this.state.chordLabel)
		{
			this.container.style.opacity = 0;
			this.timeout = setTimeout(this.show,205,newProps.chordLabel);
		}
	}
	
	show(chordLabel)
	{
		this.timeout = null;
		this.container.style.opacity = 1;
		this.setState(
		{
			chordLabel:chordLabel
		});
	}
	
	compileJsx()
	{
		// {this.state.chordLabel}
		var jsx = <div dangerouslySetInnerHTML={{__html:this.state.chordLabel}}>
					
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'chordDiagramChordLabelContainer'} ref={(elem)=>this.container=elem}>
				{jsx}
			</div>
		);
	}
}

export default ChordDiagramChordLabel;