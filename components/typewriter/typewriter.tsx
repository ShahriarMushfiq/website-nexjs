import { Box, BoxProps, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

interface TypewriterProps extends BoxProps {
  text: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [_text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (isDeleting) {
      if (0 < index) {
        timeoutId = setTimeout(() => {
          setText(_text.slice(0, -1));
          setIndex(index - 1);
        }, 200);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
        }, 50);
      }
    } else {
      if (index < text.length) {
        timeoutId = setTimeout(() => {
          setText(_text + text[index]);
          setIndex(index + 1);
        }, 200);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 5000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [index, isDeleting, text, _text]);

  useEffect(() => {
    const cursorTimeoutId = setTimeout(() => {
      setCursorVisible(!cursorVisible);
    }, 500);

    return () => clearTimeout(cursorTimeoutId);
  }, [cursorVisible]);

  return (
    <Box as="span" sx={{ overflow: 'hidden', position: 'relative' }}>
      <Text as="span" sx={{
        whiteSpace: 'nowrap',
        marginRight: {
          base: '0.5rem',
          sm: '0.6rem',
          md: '0.8rem',
        }
      }}>
        {_text}
      </Text>
      {cursorVisible && (
        <Text as="span" sx={{ position: 'absolute', right: 0, top: 0 }}>|</Text>
      )}
    </Box>
  );
}