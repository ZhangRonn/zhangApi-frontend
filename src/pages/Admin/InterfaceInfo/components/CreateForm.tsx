import {Modal} from "antd";
import { ProTable} from "@ant-design/pro-components";
import type {ProColumns} from "@ant-design/pro-components";
import React from "react";
import '@umijs/max'



export type Props = {
  columns: ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: InterfaceInfo) => Promise<void>;
  visible:boolean;


};

const CreateModal: React.FC<Props> = (props) => {
  const {columns,onCancel,onSubmit,visible} =props;
  return (
   <Modal visible={visible}footer={null} onCancel={()=>onCancel?.()}>
     {
       <ProTable
       type="form"
       columns={columns}
       onSubmit={async (value)=>{
         onSubmit?.(value);
       }}
       >

       </ProTable>

     }

   </Modal>
  );
};

export default CreateModal;
