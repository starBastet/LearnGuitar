import React, {Component} from 'react';
//import './MajorScales.css';


class MajorScales extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.dataA = this.props.dataA;
		
		this.compileJsx = this.compileJsx.bind(this);
	}
	
	componentWillMount()
	{
		
	}
	
	componentDidMount()
	{
		
	}
	
	compileJsx()
	{
		var jsx = <div>
					<p className={'titleText'}>
						{this.dataA.TITLE}
					</p>
					<div className={'blurbText'}>
						{this.dataA.BLURBS_A[0]}
					</div>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'sectionContainer'}>
				{jsx}
			</div>
		);
	}
}

export default MajorScales;