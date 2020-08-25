import React, { useEffect } from "react";

import { api } from "@/api";
import "./User.less";

export default function User() {
  useEffect(() => {
    const [getUserInfo, cancelGetUserInfo] = api.get("/user/profile");
    const [getUsers, cancelGetUsers] = api.list<number>("/users");

    getUserInfo().then((res) => {
      console.log(res);
    });

    getUsers().then((res) => {
      console.log(res.data);
    });

    return () => {
      console.log("取消请求");
      cancelGetUserInfo();
    };
  }, []);

  return (
    <div>
      <h3>User Page</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem
        magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta
        turpis, ut iaculis justo.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet, purus vitae eleifend tristique, lorem
        magna volutpat orci, et vehicula erat erat nec elit. Aenean posuere nunc ac cursus facilisis. Aenean vel porta
        turpis, ut iaculis justo.
      </p>
    </div>
  );
}
