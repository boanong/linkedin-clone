import styled from "@emotion/styled";

export const DropdownCard = styled.div`
  height: 520px;
  font-size: 16px;
  width: 300px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
  margin: 15px 0 0;
  z-index: 3;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const ProfilePictureAndName = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin: 5px auto 1rem;
`;

export const ProfilePictureDiv = styled.div``;

export const ProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 2%;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfilePicture2 = styled.img`
  width: 45px;
  height: 45px;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin: 2%;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfileName = styled.p`
  font-size: 15px;
  font-weight: bolder;
  &:hover {
    cursor: pointer;
  }
`;

export const JobTitle = styled.p`
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`;

export const JobtitleDiv = styled.div`
  /* display: block; */
`;

export const Button = styled.div`
  background-color: none;
  white-space: nowrap;
  border-width: 2px;
  border-color: #0077b5;
  color: #0077b5;
  padding: 0 95px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledText = styled.p`
  font-size: 18px;
  font-weight: bolder;
  color: #454444;
`;

export const StyledText2 = styled.p`
  font-size: 18px;
  color: #5b5959;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Manage = styled.p`
  font-size: 18px;
  font-weight: bolder;
  color: #454444;

  &:hover {
  }
`;
export const ProfileDiv = styled.div`
  border-top: 1px solid #e4e3e3;
  border-bottom: 1px solid #e4e3e3;
  margin-top: 2%;
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
`;

export const SettingAndPrivacy = styled.p`
  font-size: 15px;
  color: #8e8a8a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ManageDiv = styled.div`
  font-size: 25px;
  border-bottom: 1px solid #e4e3e3;
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
`;

export const LanguageText = styled.p`
  font-size: 15px;
  color: #8e8a8a;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const SignOut = styled.p`
  font-size: 18px;
  color: #8e8a8a;
  line-height: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  border: none;
  &:hover {
    font-size: 19px;
    cursor: pointer;
    text-decoration: underline;
  }
`;
