import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Popover, Text, Drawer } from "@mantine/core";
// import { Popover } from '@mantine/core';

export const Counter = () => {
  const [opened, { open, close }] = useDisclosure(false);
  // const [openedDrawer, { openDrawer, closeDrawer }] = useDisclosure(false);
  const [openedDrawer, setOpenedDrawer] = useState(false);

  const openDrawer = () => setOpenedDrawer(true);
  const closeDrawer = () => setOpenedDrawer(false);

  return (
    <div className="w-full h-full bg-red-300 flex justify-center items-center gap-2">
      <Modal opened={opened} onClose={close} title="Authentication">
        <h1>Hello from modal man</h1>
      </Modal>

      <Button onClick={open} className="text-black bg-teal-200">
        Open modal
      </Button>

      <Popover
        width={200}
        position="top"
        offset={{ mainAxis: 50, crossAxis: 50 }}
      >
        <Popover.Target>
          <Button className="text-black bg-slate-200">Popover target</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="xs">
            Change position and offset to configure dropdown offset relative to
            target
          </Text>
        </Popover.Dropdown>
      </Popover>

      <Drawer offset={8} radius="md" opened={openedDrawer} onClose={closeDrawer} title="Authentication">
        <span>Hello from sidebar or drawer lol</span>
      </Drawer>

      <Button onClick={openDrawer} className="text-black bg-teal-200">Open Drawer</Button>
    </div>
  );
};
