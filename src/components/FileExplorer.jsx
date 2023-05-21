import { useEffect } from "react";
import { useState } from "react";
import { AiFillFolder , AiFillFolderAdd , AiFillDelete , AiFillFileAdd } from 'react-icons/ai'

import Icon from "./Icon";

// Recursion

// Event Bubbling
// Event Capturing

const FileExplorer = ({dir,setHigherData}) => {
  const [data,setData] = useState(dir)
  const [isExpand, setIsExpand] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);




  const removeFloder = () => {
    setHigherData((p) =>
      ({
        ...p,
        children : p.children.filter(({id}) => id !== data.id)
      })
    )
  }
  const addFolder = () => {
    const newFolderName = prompt('Enter your new folder Name')
    setData((p) => ({
      ...p,
      children : [
        ...p.children,
        {
          id : Math.random(),
          name : newFolderName,
          isFolder : true , 
          children : []
        }
      ]
      
    }))
    setIsExpand((e) => !e )
  }
  const removeFile = (selectedId) => {
    setHigherData((p) => ({
      ...p,
      children : p.children.filter(({id}) => id !== selectedId)
    }))
  }
  const addFile = () => {
    const newFileName = prompt('Enter your new file Name')
    setData((p) => ({
      ...p,
      children : [
        ...p.children,
        {
          id : Math.random(),
          name : newFileName,
          isFolder : false , 
          children : []
        }
      ]
    }))
  }

  const handleExpanstion = (e, id) => {
    e.stopPropagation();
    setIsExpand(!isExpand);
  };



  return (
    <div
      className="pl-6 cursor-pointer"
      onClick={(e) => handleExpanstion(e, data.id)}
    >
      <div
        className="flex justify-between"
        onMouseEnter={(e) => {
          e.stopPropagation();
          setIsOptionsVisible(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation();
          setIsOptionsVisible(false);
        }}
      >
        <span className="flex items-center px-3 py-1 shadow-md rounded-md shadow-black my-1">
          {data.isFolder ? <AiFillFolder/> : <Icon fileName={data.name} />}
          <span className="mx-3">
            {data.name}
          </span>
        </span>
        {data.isFolder && isOptionsVisible ? (
          <div className="visible flex items-center">
            <button className="" onClick={addFile}>
              <AiFillFileAdd className="w-6 h-6 mx-2 hover:scale-90"/>
            </button>
            <button className="" onClick={addFolder}>
              <AiFillFolderAdd className="w-6 h-6 mx-2 hover:scale-90"/>
            </button>
            {!data.isRoot ? 
            <button className="" onClick={removeFloder} >
              <AiFillDelete className="w-6 h-6 mx-2 hover:scale-90"/>
            </button> 
            : null
            }
            
          </div>
        ) : null}
        {!data.isFolder && isOptionsVisible ? (
          <div className="visible flex items-center">
            <button  onClick={() => {removeFile(data.id)}}>
              <AiFillDelete className="w-6 h-6 mx-2 hover:scale-90"/>
            </button>
          </div>
        ) : null}
      </div>
      {isExpand && data.isFolder
        ? data.children.map(({ id, name, children, isFolder }) => {
          if ( name !== "$#DELETE_THIS_FOLDER#$" ) {
            return(
              <FileExplorer setHigherData={setData} key={id} dir={{ id, name, children, isFolder }} />
            )
          }
        })
          : null}
    </div>
  );
};

export default FileExplorer;
