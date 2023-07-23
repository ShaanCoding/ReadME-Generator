import Block, { IBlocks } from "./Block"

interface IBlocksPageProps {
  blocks: IBlocks[]
  setBlocks: React.Dispatch<React.SetStateAction<IBlocks[]>>
}

const BlocksPage: React.FC<IBlocksPageProps> = ({ blocks, setBlocks }) => {
  return (
    <div className="w-full">
      {blocks.map((block, index) => {
        return (
          <Block
            title={block.title}
            subtitle={block.subtitle}
            blocks={blocks}
            setBlocks={setBlocks}
            key={index}
            index={index}
            resetBlocks={() => {
              alert("Resetting Blocks")
            }}
          >
            <div className="w-full rounded-2xl bg-tertiary p-4">
              <p className="text-textGray font-poppins size-[13px] font-normal mb-4">
                # Project Title
              </p>
              <p className="text-textGray font-poppins size-[13px] font-normal mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget blandit diam, ac pellentesque diam. Aliquam pellentesque
                augue vitae lacinia molestie. Morbi ac arcu eu neque tempor
                gravida nec at nunc. Phasellus efficitur lectus in nulla varius,
                eget rutrum elit venenatis. Duis ac feugiat lorem, sed viverra
                mauris. Sed pellentesque at orci pharetra vehicula. Nam eu sem
                accumsan nunc fringilla luctus eget quis felis. Proin vestibulum
                sem magna, congue dignissim neque lobortis eget. Maecenas
                volutpat, tellus ut euismod tristique, mauris ligula aliquam
                orci, eget accumsan ligula lacus lobortis quam. Vivamus gravida
                ultricies odio. Nam nulla tellus, gravida ut commodo nec,
                faucibus ut elit. Etiam sed felis tincidunt, pharetra tortor et,
                condimentum neque.
              </p>
            </div>
          </Block>
        )
      })}
    </div>
  )
}

export default BlocksPage
