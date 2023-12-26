import { Button, Container, Input, TextEditor } from "../../components"
import { Icons } from "../../utility"

export const ProfileEdit = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-3 gap-x-6 gap-y-5">
          <div>
            <Input label="first name" />
          </div>
          <div>
            <Input label="last name" />
          </div>
          <div>
            <Input label="User name" />
          </div>
          <div>
            <Input label="old password" />
          </div>
          <div>
            <Input label="password" />
          </div>
          <div>
            <Input label="email" />
          </div>
          <div className="col-span-3">
            <Input label="add banner" />
          </div>
          <div className="col-span-2">
            <TextEditor
              label='explanation'
              col={10}
              rows={10}
            />
          </div>
          <div>
            <Input label="add image" />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <Button className='py-3 px-4' type='primary'>{Icons.SaveIcon}save</Button>
        </div>
      </Container>
    </section>
  )
}
