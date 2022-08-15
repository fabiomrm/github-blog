import { TagContainer } from "./styles";


interface TagProps {
  icon: string | React.ReactNode;
  text: string;
  href?: string;
}

export function Tag({ icon, text, href }: TagProps) {
  return (
    <TagContainer href={href} target="_blank" >
      <>
        {typeof icon === 'string' ? (
          <img src={icon} alt="" className="logo" />
        ) : (
          icon
        )
        }
        <span>{text}</span>
      </>
    </TagContainer >
  )
}