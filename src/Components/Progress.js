import ProgressBar from 'react-bootstrap/ProgressBar';
import vector from '../Vector.svg'
function WithLabelExample(progress) {
  const now = progress.progress;
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default function ProgressSample(){
return(
    <div>
        <span className='title'>Line Chart</span>
        <div className='progress-div'>
        <div>
            <div className='progress-title'>
                <span>Transaction</span>
                <span>40/40</span>
            </div>
        </div>
        <div className='progressbar-div'>
        <div className='progressbar progress1'>
            <WithLabelExample progress={100}/>
        </div>
        {
            true? <img src={vector}/> : null
        }</div>
            <div>
                <div className='progress-title'>
                    <span>Transaction revenue</span>
                    <span>$3555/$4198</span>
                </div>
            </div>
            <div className='progressbar-div'>
        <div className='progressbar progress2'>
            <WithLabelExample progress={90}/>
        </div>
        {/* {
            true? <img src={vector}/> : null
        } */}
        </div>
            <div>
                <div className='progress-title'>
                    <span>Transaction goals</span>
                    <span>36677/36677</span>
                </div>
            </div>
            <div className='progressbar-div'>
        <div className='progressbar progress3'>
            <WithLabelExample progress={70}/>
        </div>
        {/* {
            true? <img src={vector}/> : null
        } */}
        </div>
        </div>
        </div>
)
}
