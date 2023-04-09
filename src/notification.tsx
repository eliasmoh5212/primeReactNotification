import { notification } from "antd";

const openNotification = (message: String, description: String) => {
  notification["success"]({
    message,
    description,
    duration: 3
  });
};

export const successNotification = (message: String, description: String) =>
  openNotification(message, description);
