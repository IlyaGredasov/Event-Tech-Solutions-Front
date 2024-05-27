import React, {FC, useEffect, useState} from "react";
import Header from "../components/header/Header";
import { useParams } from "react-router-dom";

import { HttpApiMethods } from '../components/utils/FetchUtils.tsx';

import axios from "axios";
import Specialist from "../components/specialist/Specialist";
import AboutEvent from "../components/about-event/AboutEvent";
import InputComment from "../components/input-comment/InputComment";
import Commentlist from "../components/comment-list/CommentList";
import EventDetailed from "../components/event-detailed/EventDetailed";
import Login from "../components/login-window/Login";
import Events from "../components/events/Events";
import {IComment, IMeet} from "../types/types.tsx";
const httpApiMethods = new HttpApiMethods();



interface EventProps {
    user: {
        role: number,
        reg: number
    }
}




const Event : FC<EventProps> = ({ user }) => {
  const { id } = useParams<{ id: string }>();
  const [modal, setModal] = useState(0);
  const getValueModal = (data: number) => {
      setModal(data);
  };
  const [meet, setMeet] = useState<IMeet | null>(null);
  const [comments, setComments] = useState<IComment[] | null>(null);

  useEffect(() => {
      if (id) {
          const getMeet = async (id : string) => {
              const newMeet = await httpApiMethods.GetMeetingById(id);
              console.log(newMeet);
              setMeet(newMeet);
          };
          const getComments = async (id : string) => {

              const newComments = await httpApiMethods.GetCommentsByMeet(id)
              console.log(newComments);
              setComments(newComments);



          };
          getMeet(id);
          getComments(id);

      }

  }, [id]);

  return (
    <>
      <Header getData={getValueModal} user={user} />
      <Login getData={getValueModal} visible={modal} setVisible={setModal}></Login>
      <EventDetailed meet={meet} />
      <AboutEvent meet={meet} />
      <Specialist meet={meet} />

      <InputComment comments={comments} />
      <h1>Ещё меропрития</h1>
      <Events />
    </>
  );
}

export default Event;