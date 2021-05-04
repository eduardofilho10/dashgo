import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Eduardo Filho</Text>
                    <Text color="gray.300" fontSize="small">c.dudu12@hotmail.com</Text>
                </Box>
            )}

            <Avatar size="md" name="Eduardo Filho" src="https://github.com/eduardofilho10.png" />
        </Flex>
    );
}