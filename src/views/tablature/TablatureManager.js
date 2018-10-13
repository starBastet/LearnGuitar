import React, {Component} from 'react';
import './TablatureManager.css';
import MeasureManager from './measure/MeasureManager';


class TablatureManager extends Component
{
	constructor(props,context)
	{
		super(props,context);
		
		this.state={
			
		};
		
		this.tabDataA = this.props.tabDataA;
		
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
					<MeasureManager
						tabDataA={this.tabDataA}
					/>
				  </div>
		
		return jsx;
	}
	
	render()
	{
		var jsx = this.compileJsx();
		
		return(
			<div className={'tablatureManagerContainer'}>
				{jsx}
			</div>
		);
	}
}

export default TablatureManager;