import * as React from 'react';
import * as XLSX from 'sheetjs-style';
import Dashboard from './dashboard';

const UploadExcel = () => {
    const [isFileUploaded, setIsFileUploaded] = React.useState(false);
    const [questionsData, setQuestionsData] = React.useState();
    const readExcel = (file: any) => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e) => {
                const bufferArray = e.target.result;
                const wb = XLSX.read(bufferArray, { type: "buffer" });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);
                resolve(data);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
        promise.then((data: any) => {
            setQuestionsData(data);
            setIsFileUploaded(true);
        });
    };

    return (
        <>
            {
                isFileUploaded ?
                    <Dashboard questionsData={questionsData} />
                    :
                    <>
                        <h3 className="heading">Exam Form Submitted Successfully !!</h3>
                        <h1 className="heading">Upload Excel Sheet</h1>
                        <div className="file-wrapper">
                            <input
                                type="file"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    readExcel(file);
                                }}
                            />
                        </div>
                    </>
            }
        </>
    )
}

export default UploadExcel;
