import styled from "styled-components";
import { ButtonPrimary } from "components/buttons/ButtonPrimary";
import { ButtonSecondary } from "components/buttons/ButtonSecondary";

const TermsTitle = styled.h2`
  margin: 0 0 ${p => p.theme.spaces.xs} 0;
  font-weight: ${p => p.theme.fontWeight.bold};
  font-size: ${p => p.theme.fontSize.s};
  line-height: 1.2;
  color: ${p => p.theme.colors.grayScale.gray50};
`;

const TermsText = styled.div`
  width: 100%;
  height: 450px;
  overflow: scroll;
  margin: 0 0 ${p => p.theme.spaces.xs} 0;
  font-weight: ${p => p.theme.fontWeight.light};
  font-size: ${p => p.theme.fontSize.xs};
  color: ${p => p.theme.colors.grayScale.gray50};
`;

const TermsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TermsAgreement = ({ onAgree, onDecline }) => {
  return (
    <div>
      <TermsTitle>The terms, conditions and Privacy Policy</TermsTitle>
      <TermsText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam
        blanditiis   harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid......
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
      </TermsText>
      <TermsActions>
        <ButtonSecondary type="button" disabled={false} title="Decline" width="130px" onClick={onDecline} />
        <ButtonPrimary type="button" disabled={false} title="Accept" width="130px" onClick={onAgree} />
      </TermsActions>
    </div>
  );
}