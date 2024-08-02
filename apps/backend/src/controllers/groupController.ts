import { prisma } from '@my-kitty/database/db';
import { Request, Response } from 'express';

interface requestBodyType extends Request {
  id?: string;
  name?: string;
  username?: string;
  description?: string;
}

export const createGroupAndAssignAdmin = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, description }: requestBodyType = req.body;
    const { userId }: any = req;
    const newGroup = await prisma.group.create({
      data: {
        name,
        description,
      },
    });

    const newUserGroup = await prisma.userGroup.create({
      data: {
        role: 'Admin',
        group: {
          connect: {
            id: newGroup.id,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return res.status(200).json({
      message: 'New group has been created successfully',
      newGroup,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Cannot create a group',
      err,
    });
  }
};

export const addUsersToGroup = async (req: Request, res: Response) => {
  try {
    const { groupId } = req.body;
    const { userId }: any = req;
    const existingGroup = await prisma.userGroup.findUnique({
      where: {
        userId_groupId: {
          userId,
          groupId,
        },
      },
    });
    if (existingGroup) {
      return res.status(400).json({
        message: 'User is already part of the group',
      });
    }
    const addUserToGroup = await prisma.userGroup.create({
      data: {
        role: 'kitty',
        user: {
          connect: {
            id: userId,
          },
        },
        group: {
          connect: {
            id: groupId,
          },
        },
      },
    });
    return res.status(200).json({
      message: 'Successfully joined the group',
      addUserToGroup,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Unable to join the group',
      err,
    });
  }
};
